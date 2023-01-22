import { ParsedUrlQuery } from "querystring";

export interface URLParams extends ParsedUrlQuery {
  slug: string;
}