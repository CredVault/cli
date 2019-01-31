export const generate = {
    name: "gen",
    action: (params) => {
        console.log("in generate. params:", params);
    },
    options: [],
    usage: "cv generate",
    description: "this command is used to generate a random password",
    isDefault: false
};
