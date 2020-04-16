import React from 'react'
import { TextInput, StyleSheet, TextInputProps, Platform } from 'react-native'
import { useTheme } from './CountryTheme'
import { useContext } from './CountryContext'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0
      }
    })
  }
})

export type CountryFilterProps = TextInputProps

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = useTheme()
  const { translation } = useContext()
  CountryFilter.defaultProps = {
    autoFocus: false,
    placeholder: translation == 'zho' ? "输入国家/地区名" : "Enter country/region name"
  }
  return (
    <TextInput
      testID="text-input-country-filter"
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor }
      ]}
      {...props}
    />
  )
}



