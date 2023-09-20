import { Schema } from "jsonschema";

export const casinoUpdateSchema : Schema = {
    id: '/casinoUpdate',
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

    anyOf: [
        { required: ['name'] },
        { required: ['status'] },
        { required: ['imageUrl'] },
    ]
}
  