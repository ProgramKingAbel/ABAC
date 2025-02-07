import * as cel from 'cel-js';
import { Action, Policy, Resource } from '../types/validator.type';
import { System } from '../types/system.type';
import { User } from '../types/user.type';

export const validatePermission = (
    action: Action,
    resource: Resource,
    system: System,
    user: User,
    policies: { [resourceKey: string]: { [actionKey: string]: Policy }}
): boolean => {

    const actionRules = policies[(resource as { __typename: string }).__typename]?.[action];

    if (!actionRules) return false;

    try {
        const context = {
            user: user,
            resource: resource,
            system: system,
        };

        return (cel.evaluate(actionRules.conditions, context) as boolean) && actionRules.effect === "allow";

    } catch (error) {
        console.error("Error Evaluating Permission: ", error);
        return false;
    }
};