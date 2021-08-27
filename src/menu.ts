import { countryOptions } from "./options/countries.options";
import { serviceOptions } from "./options/services.options";
import { environmentOptions } from "./options/environment.options";

const menu = async () => {
  // TODO: Remove type any to correct type.
  const shortnames: any = {
    chile: '',
    spain: 'sp',
    portugal: 'pt',
    costarica: 'cr',
    panama: 'pa',
    guatemala: 'gt',
  }

  // TODO: Remove type any to correct type.
  const regions: any = {
    chile: 'us-east-1',
    spain: 'eu-west-1',
    portugal: 'eu-west-1',
    costarica: 'us-east-1',
    panama: 'us-east-1',
    guatemala: 'us-east-1',
  }

  const { country } = await countryOptions();
  const { environment } = await environmentOptions();
  const { service } = await serviceOptions();

  const region: string = regions[country]
  const serviceProfile: string = `${service}-${environment}`
  const profile: string = country !== 'chile' ? `pj-${shortnames[country]}-production` : 'pj-production'

  return { profile, region, serviceProfile }
};


export = menu;
