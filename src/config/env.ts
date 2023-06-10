import dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

type configApp = {
  port: number;
  db_url: string;
};

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(process.env.PORT),
    DB_URL: Joi.string()
      // .required()
      .default(process.env.DB_URL ?? '')
      .description('Host name mysql'),
    SMTP_PASSWORD: Joi.string()
      // .required()
      .default(process.env.SMTP_PASSWORD ?? '')
      .description('smtp password'),
  })
  .unknown();

const { value: envVal, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const configEnv: configApp = {
  port: envVal.PORT,
  db_url: envVal.DB_URL,
};
export default configEnv;
