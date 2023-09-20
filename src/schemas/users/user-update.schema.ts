import { Schema } from "jsonschema";

export const userUpdateSchema : Schema = {
    id: '/UserUpdate',
    type: "object",

    properties: {
      username: {
        type: "string"
      },
      phone: {
        type: "string",
        pattern: "^[0-9]+$"
      },
      email: {
        type: "string",
        format: "email"
      },
      role: {
        type: "string",
        enum: ["ADMIN", "TELLER"]
      },
      percent_agreement:{
        type: "string",
        pattern: "^(?:100|[0-9]{1,2})$"
      },
      status: {
        type: "string",
        enum: ["ACTIVE", "INACTIVE", "DISABLED"]
      }

    },
    anyOf: [
        { required: ['username'] },
        { required: ['phone'] },
        { required: ['email'] },
        { required: ['role'] },
        { required: ['percent_agreement'] },
        { required: ['status'] },
    ]

}
  