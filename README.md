# Modal React

## Prérequis

Ce package nécessite les versions minimales suivantes pour fonctionner correctement :

- Node.js : v16.18.1
- React : v18.2.0
- ReactDOM : v18.2.0
- Styled Components : v6.0.0-rc.3

Assurez-vous que vous avez bien installé ces versions avant de commencer à utiliser ce package.


Ce package Modal React est une solution rapide et efficace pour ajouter une fonctionnalité de modal à votre application React. Il est facile à utiliser et à personnaliser, avec plusieurs options disponibles pour l'adapter à vos besoins.

## Installation

Pour installer ce package, utilisez simplement la commande suivante :

```bash
npm i modal-react-epok974
```

## Utilisation
L'utilisation de ce package est simple. Il suffit d'importer le composant Modal et de l'intégrer à votre application comme suit :

```jsx
import Modal from 'modal-react-epok974';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        open={isOpen}
        handleCloseModal={() => setIsOpen(false)}
        width="500"
        height="300"
      >
        Contenu de votre modal
      </Modal>
    </>
  );
}
```

## Props
Modal accepte les props suivantes :



| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | '500px' | La largeur du modal. |
| `height` | string | '300px' | La hauteur du modal. |
| `open` | boolean | false | Un booléen indiquant si le modal doit être ouvert ou fermé. |
| `handleCloseModal` | function | undefined | Une fonction qui est appelée lorsque l'utilisateur souhaite fermer le modal. |

## Contribuer
Les contributions sont toujours les bienvenues. Si vous avez une fonctionnalité à suggérer ou un bug à signaler, n'hésitez pas à ouvrir un issue.

Vous pouvez consulter le code source de ce package sur [GitHub](https://github.com/Emmanuel97423/react-modal-package).


#### License
MIT