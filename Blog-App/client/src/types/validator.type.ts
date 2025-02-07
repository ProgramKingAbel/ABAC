import { Post } from "./post.type";
import { User } from "./user.type"
import { Comment } from "./comment.type";

export type Action = "view" | "edit" | "create" | "approve" | "publish" | "delete";
export type Resource = Partial<Post> | Partial<User> | Partial<Comment>;
export type PolicyEffect = "allow" | "deny";

export interface Policy {
    policyId: string;
    resource: string;
    action: string;
    effect: PolicyEffect;
    conditions: string;
}