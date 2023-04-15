export interface PaginatedResult {
  name: string,
  url: string,
}

export interface PaginatedResponse {
  count: number,
  next: string | null,
  previous: string | null,
  results: PaginatedResult[],
}
