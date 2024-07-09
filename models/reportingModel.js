import { z } from "zod";

const reportingModel = z.object({
  client_id: z.number(),
  client: z.string().min(1, { message: "client name is required" }),
  subdomain: z.string().min(1, { message: "client name is required" }),
  domain: z.string(),
});

export default reportingModel;
