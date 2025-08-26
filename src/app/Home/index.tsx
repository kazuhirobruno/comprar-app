import { Image, View, TouchableOpacity, Text } from "react-native"

import { Button } from "@/components/Button"

import { styles } from "./styles"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

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
      </View>
    </View>
  )
}
