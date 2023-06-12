export interface UserI {
    user_name?: string;
    user_email?: string;
    user_password?: string;
}

export interface OneUser extends UserI{
    user_id?:number;
}