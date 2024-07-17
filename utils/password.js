import bcrypt from "bcrypt";

export const generateHashedPwd = async (plainPwd, saltRound) => {
    return await bcrypt.hash(plainPwd, saltRound);
};