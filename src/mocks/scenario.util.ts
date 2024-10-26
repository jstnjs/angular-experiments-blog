export function addScenarios(scenarios: { [key: string]: any }) {
  const scenarioName =
    new URLSearchParams(window.location.search).get('scenario') || '';

  const runtimeScenarios = scenarios[scenarioName] || [];
  return runtimeScenarios;
}
