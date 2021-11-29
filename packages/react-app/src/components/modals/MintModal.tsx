import {
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { gradients } from "../../theme/foundations/colors";
import Button from "../Button";

const MintModal = ({ isOpen, onClose, amount }) => {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m="1em" h="50vh">
          <ModalHeader alignSelf={"center"}>
            Mint {amount} Celostrial{amount === 1 ? "" : "s"}
          </ModalHeader>
          <ModalBody>
            <VStack>
              <Button
                size="lg"
                onClick={() => console.log("confirm tx")}
                background={gradients.primary}
                justifyContent="space-between"
                // rightIcon={<Image width="2em" src={ufo} />}
              >
                Confirm
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack alignItems="center"></HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MintModal;
