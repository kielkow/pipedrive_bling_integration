export default interface GoalPipeDrive {
  id: string;
  owner_id: number;
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
    currency_id: number;
  };
  interval: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  duration: {
    start: string;
    end: string;
  };
  is_active: boolean;
}
