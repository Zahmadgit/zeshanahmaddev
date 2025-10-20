export interface commitResponseStructure {
  data: [
    {
      id: string;
      type: string;
      actor: {
        id: number;
        avatar_url: string;
        display_login: string;
        gravatar_id: string;
        login: string;
        url: string;
      };
      created_at: Date;
      payload: {
        discription: null | string;
        full_ref: string;
        master_branch: string;
        pusher_type: string;
        ref: string;
        ref_type: string;
      };
      public: boolean;
      repo: {
        id: number;
        name: string;
        url: string;
      };
    }
  ];
  status: number;
}
