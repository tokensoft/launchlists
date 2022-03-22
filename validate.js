const Ajv = require("ajv");
const saleSchema = require("./sale.schema.json");
const fs = require( 'fs' );
const path = require( 'path' );

const ajv = new Ajv()
const validate = ajv.compile(saleSchema)

function validateSchema (filePath, data) {
  const valid = validate(data)
  console.warn(valid ? 'Validation passed' : 'Validation failed')
  if (!valid) {
    console.error(filePath, validate.errors);
    throw new Error(validate.errors);
  }
}

async function loadSales() {
  const files = await fs.promises.readdir('./sales');

  for( const file of files ) {
    const filePath = path.join( './sales', file );

    const stat = await fs.promises.stat(filePath);

    if(!stat.isFile()) {
      throw new Error(`${filePath} is not a file! The ./sales/ directory can only contain sale files`);
    }

    const content = fs.readFileSync(filePath);

    let saleConfig
    try {
      saleConfig = JSON.parse(content);
    } catch(e) {
      console.error(`Sale config in ${filePath} is not valid JSON: ${e.message}`)
    }

    if (file.split('.')[0] !== saleConfig.saleId) {
      throw new Error(`file name ${file} must match sale id ${saleConfig.saleId}`)
    }

    validateSchema(saleConfig, saleConfig);
  }
}

loadSales()
