interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryProps) {
  return(
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a target="_blank" href={props.repository.html_url} >
        Acessar repositórios
      </a>
    </li>
  )
}