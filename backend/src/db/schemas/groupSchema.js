const Schema = require("mongoose").Schema;

const groupSchema = new Schema(
  {
    title: { type: String, required: true, unique: true, index: true },
    manager: { type: Schema.Types.ObjectId, ref: "User", required: false },
    teacher: { type: Schema.Types.ObjectId, ref: "User", required: false },
    levelId: {type: Schema.Types.ObjectId, ref: "Level", required: false},
    students: [{ type: Schema.Types.ObjectId, ref: "User", required: false }],
  },
  { timestamps: true }
);

module.exports = groupSchema;
