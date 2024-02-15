import React, { useRef ,useState} from "react";
import styled from "styled-components/native";

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const inputRef = useRef();
  const boxArray = new Array(maximumLength).fill(0);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
      <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        onPressIn={handleOnPress}
      />
    </OTPInputContainer>
  );
};

export default OTPInput;
const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const TextInputHidden = styled.TextInput.attrs({
  keyboardType: 'numeric' // This sets the keyboard type to numeric
})`
  position: absolute;
  opacity: 0;
  width: 300px;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
`;
export const SplitOTPBoxesContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  gap: 30px;
  justify-content: space-evenly;
`;
const SplitBoxes = styled.View`
  border-color: #9c0f05;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  min-width: 50px;
`;

const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
`;
const SplitBoxesFocused = styled(SplitBoxes)`
  background-color: #f5c9c9;
`;