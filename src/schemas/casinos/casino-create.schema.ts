import { Schema } from "jsonschema";

export const casinoCreateSchema: Schema = {
    id: '/casinoCreate',
    type: "object",

    properties: {
        name: {
            type: "string"
        },
        status: {
            type: "string",
            enum: ["ACTIVE", "INACTIVE", "DISABLED"]
        },
        
        imageUrl: {
            type: "string",
            format: 'uri', 
            pattern: '.*\\.(jpg|jpeg|png|gif)$'
        },
    },

    required: ["name"]
}
  