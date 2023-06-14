# Modal React

## Prerequisites

This package requires the following minimum versions to function properly:

- Node.js : v16.18.1
- React : v18.2.0
- ReactDOM : v18.2.0
- Styled Components : v6.0.0-rc.3

Make sure you have installed these versions before starting to use this package.

This Modal React package is a quick and efficient solution to add modal functionality to your React application. It is easy to use and customize, with multiple options available to tailor it to your needs.

## Installation

To install this package, simply use the following command:

```bash
npm i modal-react-epok974
```

## Usage

Using this package is simple. Just import the Modal component and integrate it into your application as follows:

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
        Modal content
      </Modal>
    </>
  );
}
```

## Props

Modal accepts the following props:



| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | '500px' | The width of the modal. |
| `height` | string | '300px' | The height of the modal. |
| `open` | boolean | false | A boolean indicating whether the modal should be open or closed. |
| `handleCloseModal` | function | undefined | A function that is called when the user wants to close the modal. |

## Contributing
Contributions are always welcome. If you have a feature to suggest or a bug to report, feel free to open an issue.

You can check out the source code of this package at [GitHub](https://github.com/Emmanuel97423/react-modal-package).


#### License
MIT