// import React from 'react';
// import Modal from 'react-bootstrap/lib/Modal';
// import Button from 'react-bootstrap/lib/Button';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.getInitialState = this.getInitialState.bind(this);
//     this.close = this.close.bind(this);
//     this.open = this.open.bind(this);
//     this.state = {
//       showModal: this.getInitialState(),
//     }
//   }
//   getInitialState() {
//     return { showModal: false };
//   };

//   close() {
//     this.setState({ showModal: false });
//   };

//   open() {
//     this.setState({ showModal: true });
//   };

//   render() {
//     return (
//       <div>
//         <Button
//           bsStyle="primary"
//           bsSize="large"
//           onClick={this.open}
//         >
//           Launch demo modal
//         </Button>

//         <Modal show={this.state.showModal} onHide={this.close}>
//           <Modal.Header closeButton>
//             <Modal.Title>Quit Battle?</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h4>You are about to quit a game.</h4>
//             <p>This will result in a forfeit. Continue?</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.close}>Close</Button>
//             <Button onClick={this.props.quitAction} bsStyle="danger">Quit</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// };