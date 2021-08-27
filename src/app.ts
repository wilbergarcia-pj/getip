import * as AWS from "aws-sdk";
import menu from './menu'


const main = async() => {
  const { profile, region, serviceProfile } = await menu()    

  // Credentials configuration
  AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile });
  AWS.config.region = region;

  // Initialize 
  const ec2: AWS.EC2 = new AWS.EC2();
  const eb: AWS.ElasticBeanstalk = new AWS.ElasticBeanstalk();

  const instanceId = await getInstanceId(eb, serviceProfile)
  const instanceIp = await findInstance(ec2, instanceId)
  console.log(instanceIp);
}

main()

function getInstanceId(eb: AWS.ElasticBeanstalk, service?: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    eb.describeEnvironmentResources({ EnvironmentName: service }, (err, data) => {
      if ( err ) reject(err);
      const { EnvironmentResources } = data;
      const { Instances } = EnvironmentResources!;
      resolve(Instances![0].Id || '')
    })
  })
}


function findInstance(ec2: AWS.EC2, instanceId: string): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const params: { InstanceIds: string[] } = {
      InstanceIds: [instanceId]
    }

    ec2.describeInstances(params, (err, data) => {
      if (err) reject(err);
      const Reservation = data.Reservations![0];
      const Instances = Reservation.Instances
      resolve(Instances![0].PrivateIpAddress)

    });
  });
}
