export class NotFoundError extends Error {
  span: string;

  constructor(message: string, span: string) {
    super(message);
    this.span = span;
  }
}
