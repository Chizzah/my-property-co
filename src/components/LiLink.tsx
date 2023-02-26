import type { Component } from 'solid-js';

type LiLinkProps = {
  href: string;
  label: string
}

const LiLink: Component<LiLinkProps> = ({ href, label }) => {
  return (
    <li class="hover:text-secondary"><a href={href}>{label}</a></li>
  );
};

export default LiLink;
