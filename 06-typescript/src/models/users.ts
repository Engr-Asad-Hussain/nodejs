import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    username: {
      type: String,
      required: [true, "Field 'username' is required."],
      unique: true,
      lowercase: true,
      trim: true
    },
    status: {
      type: String,
      enum: {
        values: ['Active', 'Pending', 'Deactive'],
        message: "Status: '{VALUE}' is not supported."
      },
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
);

// UserSchema.methods.getUsername = function() {
//   return UserSchema
// }
UserSchema.statics.getUser = function (username: string) {
  return this.findOne({ username });
};

export const UserModel = mongoose.model('Users', UserSchema);
