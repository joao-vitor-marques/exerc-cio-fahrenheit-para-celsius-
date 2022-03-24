function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // fluxo  ideal de Fahrenheit para Celsius
  let updatedDegree = degree.toUpperCase().replace('F', '')
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = ' Graus Celsius'
  // fluxo alternativo

  if (celsiusExists) {
    updatedDegree = degree.toUpperCase().replace('C', '')
    formula = Celsius => (Celsius * 9) / 5 + 32
    degreeSign = '  Graus Fahrenheit'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('567f'))
  // transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}
