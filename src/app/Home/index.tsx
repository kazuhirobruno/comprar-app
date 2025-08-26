import { Image, View, TouchableOpacity, Text, ScrollView, FlatList } from "react-native"

import { Button } from "@/components/Button"

import { styles } from "./styles"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from "@/components/Item"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = Array.from({length: 100}).map((_, index) => String(index))

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("@/assets/logo.png")}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>
 
      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter status={status} isActive key={status} />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Item 
              data={{
                status: FilterStatus.DONE,
                description: String(item)
              }} 
              onStatus={() => console.log("onStatus")}
              onRemove={() => console.log("Remove")}
            ></Item>
          )}
        />
      </View>
    </View>
  )
}
