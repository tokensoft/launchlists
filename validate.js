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
  const filePaths = [
    './dev/sales_index.json',
    './staging/sales_index.json',
    './prod/sales_index.json',
    './sale.example.json'
  ]

  for( const filePath of filePaths ) {
    console.log(`Checking ${filePath}`)
    const content = fs.readFileSync(filePath);

    let saleConfig
    try {
      saleConfig = JSON.parse(content);
    } catch(e) {
      console.error(`Sale config in ${filePath} is not valid JSON: ${e.message}`)
    }

    validateSchema(filePath, saleConfig);
  }
}

loadSales()
