import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack, Icon, Input, VStack } from 'native-base'

const Form = props => {
  const { fetchRecipes, onInputChange } = props
  const [formData, setData] = useState({})

  const onSubmit = () => {
    fetchRecipes()
  }

  return (
    <VStack space={2} width='100%' py={5}>
      <FormControl isRequired>
        <FormControl.Label>Ingredient Search</FormControl.Label>
        <HStack width='100%' space={2}>
          <Input
            placeholder='i.e. beef, chicken, pork, etc.'
            variant='filled'
            bg='gray.200'
            px={3}
            width='85%'
            onChangeText={value => {
              onInputChange(value)
              setData({ ...formData, name: value })
            }}
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
          />
          <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  )
}

export default Form
