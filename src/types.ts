import { RequestEvent } from '@sveltejs/kit';
import type {
  AnyRouter,
  inferRouterContext,
  inferRouterError,
  ProcedureType,
  TRPCError,
} from '@trpc/server';
import type { ResponseMeta } from '@trpc/server/http';
import type { TRPCResponse } from '@trpc/server/rpc';

export type CreateContextFn<TRouter extends AnyRouter> = (event: RequestEvent) => inferRouterContext<TRouter> | Promise<inferRouterContext<TRouter>>;

export type ResponseMetaFn<TRouter extends AnyRouter> = (opts: {
  data: TRPCResponse<unknown, inferRouterError<TRouter>>[];
  ctx?: inferRouterContext<TRouter>;
  paths?: string[];
  type: ProcedureType | 'unknown';
  errors: TRPCError[];
}) => ResponseMeta;
