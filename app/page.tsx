"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function PrankPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(0)

  // Posiciones predefinidas seguras usando clases de Tailwind
  const positions = [
    "relative", // Posición inicial
    "fixed top-1/2 left-4", // Izquierda
    "fixed top-1/2 right-4", // Derecha
    "fixed bottom-20 left-1/2 transform -translate-x-1/2", // Abajo centro
    "fixed top-20 left-1/4", // Arriba izquierda
    "fixed top-20 right-1/4", // Arriba derecha
    "fixed bottom-1/4 left-20", // Abajo izquierda
    "fixed bottom-1/4 right-20", // Abajo derecha
    "fixed top-1/3 left-1/2 transform -translate-x-1/2", // Centro arriba
    "fixed bottom-1/3 left-1/2 transform -translate-x-1/2", // Centro abajo
  ]

  const ironicMessages = [
    "¿En serio?",
    "¿Estás seguro?",
    "Piénsalo mejor...",
    "¿De verdad?",
    "¿No será que sí?",
    "Mmm... ¿seguro?",
    "¿100% seguro?",
    "¿Realmente no?",
    "¿O tal vez sí?",
    "¿Definitivamente no?",
    "¿Sin dudas?",
    "¿Completamente seguro?",
    "¿Absolutamente no?",
    "¿Ya te cansaste?",
    "¿Seguimos?",
    "¿Otro intento?",
    "¿No te rindes?",
    "¿Persistente, eh?",
    "¿Todavía no?",
    "¿En serio sigues?",
  ]

  const moveNoButton = () => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setShowWarning(true)

    setTimeout(() => setShowWarning(false), 5000)

    // Cambiar a la siguiente posición
    const nextPosition = newAttempts % positions.length
    setCurrentPosition(nextPosition)
  }

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  const getCurrentMessage = () => {
    if (attempts === 0) return ""
    const messageIndex = Math.min(attempts - 1, ironicMessages.length - 1)
    return ironicMessages[messageIndex]
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden bg-gray-900">
        {/* Imagen de fondo que ocupa todo el viewport */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/abstract-red-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-red-900/60 to-gray-800/80 backdrop-blur-sm"></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-lg text-center border-0 shadow-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-red-900/50 border border-red-800/30">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-red-900/50">
                    <span className="text-3xl">😼</span> {/* Gato enojado */}
                  </div>
                  <span className="text-lg absolute -top-2 -right-2 animate-spin">🐱</span>
                  <span className="text-sm absolute -bottom-1 -left-1 animate-bounce">🐾</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
                ¡Sabía que elegirías que sí! 😺
              </CardTitle>
              <CardDescription className="text-lg text-gray-300 leading-relaxed">
                Por supuesto que ibas a terminar diciendo que sí...
                <br />
                <span className="text-red-400 font-medium">¡Eres tan predecible como adorable! 😏</span>
                <br />
                <span className="text-sm text-pink-400 mt-2 block">Al final todos caen en mis encantos... 🐱</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="space-y-6">
                <div className="bg-gray-800/80 border border-red-700/50 rounded-2xl p-4">
                  <p className="text-sm text-red-300">
                    <span className="font-semibold text-red-200">Intentos desesperados de escape:</span> {attempts} 🐾
                  </p>
                  <p className="text-xs text-pink-300 mt-2">
                    {attempts === 0 && "¡Ni siquiera intentaste resistirte! 😸"}
                    {attempts > 0 && attempts <= 5 && "Poca resistencia... ¡me gusta! 🐱"}
                    {attempts > 5 && attempts <= 10 && "¡Qué lindo verte luchar! 😺"}
                    {attempts > 10 && "¡Tu persistencia es encantadora! 😻"}
                  </p>
                </div>

                <Button
                  onClick={() => window.location.reload()}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-900/30 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
                >
                  Jugar de nuevo 😸
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gray-900">
      {/* Imagen de fondo que ocupa todo el viewport */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/abstract-red-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-red-900/30 to-gray-800/70"></div>

      {/* Elementos decorativos flotantes con gatitos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-1/4 left-1/4 text-2xl animate-bounce delay-300">🐱</span>
        <span className="absolute top-1/3 right-1/4 text-lg animate-pulse delay-1000">😸</span>
        <span className="absolute bottom-1/4 right-1/3 text-sm animate-spin delay-500">🐾</span>
        <Sparkles className="absolute top-1/5 right-1/5 w-4 h-4 text-red-400/60 animate-spin delay-700" />
        <span className="absolute bottom-1/3 left-1/5 text-base animate-ping delay-900">😺</span>
        <span className="absolute top-1/2 left-1/6 text-sm animate-bounce delay-1200">🐈</span>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl text-center border-0 shadow-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-red-900/30 min-h-[30vh] border border-red-800/30">
          <CardHeader className="pb-8 pt-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                  <span className="text-4xl">😾</span> {/* Gato enojado */}
                </div>
                <div className="absolute -inset-3 bg-gradient-to-r from-red-800 to-red-900 rounded-full blur opacity-30 animate-pulse"></div>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight">
              ¿Esto es tan fácil de definir como lo infinito?
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-10">
            <div className="flex gap-6 justify-center relative mb-8">
              <Button
                onClick={handleYesClick}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold px-10 py-4 text-xl shadow-lg shadow-red-900/30 hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
              >
                SÍ 😸
              </Button>

              <Button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                size="lg"
                variant="outline"
                className={`border-2 border-red-600 text-red-400 hover:bg-red-900/20 font-semibold px-10 py-4 text-xl shadow-lg shadow-red-900/20 transition-all duration-500 bg-gray-800/90 hover:text-red-300 rounded-full z-[1000] ${positions[currentPosition]}`}
              >
                NO 🐾
              </Button>
            </div>

            {/* Espacio fijo para el mensaje irónico - altura fija para evitar que el card crezca */}
            <div className="h-16 flex items-center justify-center mb-6">
              {showWarning && attempts > 0 && (
                <div className="bg-gray-800/95 text-red-300 px-6 py-3 rounded-full shadow-lg border border-red-700/50 animate-bounce font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🐱</span>
                    {getCurrentMessage()}
                  </div>
                </div>
              )}
            </div>

            {attempts > 0 && (
              <div className="p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-red-700/50 rounded-2xl backdrop-blur-sm">
                <p className="text-base text-red-300 mb-2">
                  <span className="font-semibold text-red-200">Intentos de resistencia:</span> {attempts} 😺
                </p>
                <p className="text-sm text-pink-300">
                  {attempts <= 3 && "El botón está jugando contigo... 😸"}
                  {attempts > 3 && attempts <= 10 && "¡Qué adorable tu insistencia! 🐱"}
                  {attempts > 10 && attempts <= 15 && "El botón se divierte con tu determinación... 😻"}
                  {attempts > 15 && "¡Tu persistencia es irresistible! 😺"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
