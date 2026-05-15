type SiteFooterProps = {
  text: string;
};

export function SiteFooter({ text }: SiteFooterProps) {
  return <footer>{text}</footer>;
}
