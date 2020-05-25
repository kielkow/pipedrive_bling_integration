export default interface GoalPipeDrive {
  title: string;
  assignee: {
    id: string;
    type: string;
  };
  type: {
    name: string;
    params: {
      pipeline_id: number;
    };
  };
  expected_outcome: {
    target: string;
    tracking_metric: string;
  };
  duration: {
    start: Date;
    end: Date;
  };
  interval: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
}
