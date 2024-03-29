// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity

import tea from './tea';
import person from './person';
import hero from './hero_image';
import accessories from './accessories';
import teabox from "./teabox";
import faq from "./faq";
import dimension from "./dimension";
import options from "./options";
import basicpages from "./basicpages";


export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    tea, 
    person, 
    hero,
    accessories, 
    teabox,
    faq,
    dimension,
    options,
    basicpages
  ]),
});
