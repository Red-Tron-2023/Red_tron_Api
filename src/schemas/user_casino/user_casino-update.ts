import { Schema } from "jsonschema";

export const userCasinoUpdateSchema: Schema = {
    id: '/userCasinoCreate',
    type: "object",

    properties: {
        user: {
            type: "string",
            format: "uuid"
        },
        casino: {
            type: "string",
            format: "uuid"
        },
        
        status: {
            type: "string",
            enum: ["ACTIVE", "INACTIVE", "DISABLED"]
          },
        
        debits:{
            type: "string",
            pattern: '^\\d+$'
        },

        credits:{
            type: "string",
            pattern: '^\\d+$'
        },

        coins:{
            type: "string",
            pattern: '^\\d+$'
        }
    },

    anyOf:[
        { required: ['user'] },
        { required: ['casino'] },
        { required: ['status'] },
        { required: ['debits'] },
        { required: ['credits'] },
        { required: ['coins'] },
    ]
}