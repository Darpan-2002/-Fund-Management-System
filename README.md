# Sample Hardhat Project



# Fund Management System

This project is a decentralized fund management system built using blockchain technology. The application leverages **React** and **Next.js** for the frontend, while **Solidity** is used for writing smart contracts that run on the Ethereum blockchain. **Ether.js** is employed to interact with the blockchain from the frontend.

## Features

- **Decentralized Fund Management**: Securely manage and track funds without relying on a central authority.
- **Smart Contracts**: All transactions and fund allocations are governed by smart contracts written in Solidity, ensuring transparency and immutability.
- **User Authentication**: Secure authentication and authorization using web3 wallets like MetaMask.
- **Real-time Updates**: Instant updates on fund transfers, allocations, and balances using Next.js server-side rendering and React's state management.
- **Ether.js Integration**: Seamless interaction with the Ethereum blockchain for deploying and interacting with smart contracts.
- **Responsive Design**: The application is designed to work on various devices, ensuring a seamless user experience across desktops, tablets, and mobile devices.

## Prerequisites

- Node.js and npm
- MetaMask or another Web3 wallet
- An Ethereum test network (e.g., Rinkeby, Goerli) for testing purposes
  
## Preview
https://fund-management-system.vercel.app/

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Darpandeka/fund-management-system.git
   cd fund-management-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile the Solidity contracts:**

   ```bash
   npx hardhat compile
   ```

4. **Deploy the contracts to a local or test Ethereum network:**

   ```bash
   npx hardhat run scripts/deploy.js --network rinkeby
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open the application in your browser:**

   Go to `http://localhost:3000` to see the app in action.

## Project Structure

- **/contracts**: Contains the Solidity smart contracts.
- **/pages**: The Next.js pages, handling routing and server-side rendering.
- **/components**: Reusable React components.
- **/scripts**: Scripts for deploying the smart contracts.
- **/public**: Static assets like images and fonts.
- **/styles**: Global and component-specific stylesheets.

## Technologies Used

- **React.js**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **Solidity**: For writing smart contracts.
- **Ether.js**: For interacting with the Ethereum blockchain.
- **Hardhat**: For Ethereum development environment and testing.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

If you have any questions, feel free to contact us at [chinmoy201920@gmail.com].

---


