import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  UIManager,
  findNodeHandle,
} from 'react-native';
import Modal from 'react-native-modal';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const TOOLTIP_WIDTH = 200;
const TOOLTIP_HEIGHT = 60;
const MARGIN = 5;

const CustomTooltip = ({ children, tooltipText, backdropColor = 'transparent' }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const touchableRef = useRef();

  const showTooltip = () => {
    const handle = findNodeHandle(touchableRef.current);
    if (handle) {
      UIManager.measureInWindow(handle, (x, y, width, height) => {
        let top = y + height + MARGIN;
        let left = x;

        if (x + TOOLTIP_WIDTH > windowWidth - MARGIN) {
          left = windowWidth - TOOLTIP_WIDTH - MARGIN;
        }

        if (x < MARGIN) {
          left = MARGIN;
        }

        if (y + height + TOOLTIP_HEIGHT + MARGIN > windowHeight) {
          top = y - TOOLTIP_HEIGHT - MARGIN;
        }

        setTooltipPos({ top, left });
        setVisible(true);
      });
    }
  };

  return (
    <View>
      <TouchableOpacity ref={touchableRef} onPress={showTooltip}>
        {children}
      </TouchableOpacity>

      <Modal
        isVisible={visible}
        backdropColor={backdropColor}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}
      >
        <View style={[styles.tooltipWrapper, { top: tooltipPos.top, left: tooltipPos.left }]}>
          <View style={styles.tooltipContainer}>
            <Text style={styles.tooltipText}>{tooltipText}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    position: 'absolute',
  },
  tooltipWrapper: {
    position: 'absolute',
  },
  tooltipContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    width: TOOLTIP_WIDTH,
  },
  tooltipText: {
    color: '#fff',
  },
});
// Dev by Darius - lvu mom

export default CustomTooltip;