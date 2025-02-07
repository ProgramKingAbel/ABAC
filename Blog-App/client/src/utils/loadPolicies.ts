// src/utils/loadPolicies.ts
import fs from 'fs';
import YAML from 'yaml';

export const loadPolicies = () => {
  const file = fs.readFileSync('../Data/policies.yaml', 'utf8');
  const policies = YAML.parse(file);
  return policies.policies;
};
