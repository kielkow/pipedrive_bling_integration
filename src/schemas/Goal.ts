import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    assignee: {
      type: Object,
      required: true,
    },
    type: {
      type: Object,
      required: true,
    },
    expected_outcome: {
      type: Object,
      required: true,
    },
    duration: {
      type: Object,
      required: true,
    },
    interval: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Goal', GoalSchema);
