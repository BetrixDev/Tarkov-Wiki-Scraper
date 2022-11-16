// This type is ugly, but so is the response
export interface WikiResponse {
  batchcomplete: string;
  query: {
    normalized: {
      from: string;
      to: string;
    }[];
    pages: Record<
      string,
      {
        pageid: number;
        ns: number;
        title: string;
        revisions: {
          slots: {
            main: {
              contentmodel: string;
              contentformat: string;
              "*": string; // This is the value we care about
            };
          };
        }[];
      }
    >;
  };
}
