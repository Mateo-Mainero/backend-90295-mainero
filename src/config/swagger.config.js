import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = YAML.load(path.join(__dirname, '../../docs/users.yaml'));
const pets = YAML.load(path.join(__dirname, '../../docs/pets.yaml'));
const adoptions = YAML.load(path.join(__dirname, '../../docs/adoptions.yaml'));
const sessions = YAML.load(path.join(__dirname, '../../docs/sessions.yaml'));
const components = YAML.load(path.join(__dirname, '../../docs/components.yaml'));

const swaggerSpecs = {
  openapi: '3.0.1',
  info: {
    title: 'AdoptMe API',
    description: 'Documentación para el proyecto de adopción de mascotas',
    version: '1.0.0',
  },
  paths: {
    ...users,
    ...pets,
    ...adoptions,
    ...sessions,
  },
  ...components,
};

export { swaggerSpecs };