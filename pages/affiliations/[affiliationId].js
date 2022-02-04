export default function Affiliation({ characters, affiliationId }) {
  return (
    <div>
      <h1>Characters Matching Affiliation &quot;{affiliationId.replace(/\+/g, ' ')}&quot;</h1>
      <ul style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-gap': '4em' }}>
        {characters.map(character => {
          return (
            <li key={character._id}>
              <p>{ character.name }</p>
              <p>{ character.affiliation }</p>
              <img src={character.photoUrl} width="100%" alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const affiliationId = params.affiliationId.replace(/\-/g, '+')
  const characters = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`).then(res => res.json());
  return {
    props: {
      affiliationId,
      characters
    }
  }
}
