#!/usr/bin/env node
import { createCLI } from "cli-max";

import { generate } from "./commands/generate.command";

const cli = createCLI({
    name: "cred-vault",
    commands: [ generate ]
});

cli.execute(process.argv.splice(2));
