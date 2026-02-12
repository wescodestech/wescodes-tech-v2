'use client'

import { useEffect, useState } from 'react'

interface CodeLine {
  id: number
  text: string
  typedText: string
  x: number
  ySlot: number // Use slot instead of percentage
  isTyping: boolean
  isDone: boolean
  fadeOut: boolean
  charIndex: number
  speed: number
  hasTyped: boolean
}

const codeSnippets = [
  "export const deployMicroservicesToKubernetes = async (services: ServiceConfig[]) => await Promise.all(services.map(svc => kubectl.apply({ namespace: 'production', replicas: 3, resources: { cpu: '500m', memory: '1Gi' }, healthCheck: '/health' })));",

  "const buildDistributedEventProcessor = () => new EventBus({ brokers: ['kafka-1:9092', 'kafka-2:9092'], topics: ['orders', 'payments', 'notifications'], partitions: 12, replicationFactor: 3, compression: 'snappy', batchSize: 10000 });",

  "async function optimizePostgreSQLQuery(query: string): Promise<QueryResult> { const plan = await db.explain(query); if (plan.cost > 1000) return db.query(query.addIndex().usePartitioning().enableParallelism()); return db.query(query); }",

  "const setupObservabilityStack = () => ({ metrics: prometheus.register(httpMetrics, dbMetrics, cacheMetrics), tracing: jaeger.init({ serviceName: 'api-gateway', samplingRate: 0.1 }), logging: winston.createLogger({ level: 'info', format: winston.format.json() }) });",

  "class TechnicalLeadership { async mentorEngineers(team: Engineer[]): Promise<GrowthPlan> { return Promise.all(team.map(eng => this.createDevelopmentPlan(eng.skills, eng.goals, eng.interests).setMilestones().trackProgress())); } }",

  "const implementCircuitBreaker = (service: MicroService) => new CircuitBreaker(service, { failureThreshold: 5, successThreshold: 2, timeout: 3000, resetTimeout: 30000, fallback: () => getCachedResponse(), onStateChange: (state) => metrics.recordState(state) });",

  "export default function ArchitectScalableSystems() { const [design, setDesign] = useState<SystemDesign>({ loadBalancer: 'nginx', cache: 'redis', database: 'postgres', queue: 'rabbitmq', monitoring: 'prometheus' }); return design.validate().optimize().deploy(); }",

  "async function processStreamingDataPipeline(events: EventStream): Promise<void> { await events.filter(e => e.type === 'critical').map(transform).batch(1000).window('5 minutes').aggregate().enrichWithUserData().validateSchema().publishToWarehouse(); }",

  "const deployWithBlueGreenStrategy = () => pipeline.runTests({ unit: true, integration: true, e2e: true, coverage: 95 }).buildImage({ optimize: true, cache: true }).deployToBlue().runSmokeTests().switchTraffic({ percentage: 10 }).monitor().rollout();",

  "interface DistributedSystemArchitect { designMicroservices(): ServiceMesh; implementEventSourcing(): EventStore; setupCQRS(): CommandQuerySeparation; orchestrateContainers(): KubernetesCluster; monitorPerformance(): ObservabilityPlatform; }",

  "class RedisClusterManager { async setupHighAvailability(): Promise<Cluster> { return redis.createCluster({ nodes: ['redis-1:6379', 'redis-2:6379', 'redis-3:6379'], replicas: 2, sentinels: true, failover: 'automatic', persistence: 'aof' }); } }",

  "const createGraphQLFederation = () => new ApolloGateway({ serviceList: [{ name: 'users', url: 'http://users-service' }, { name: 'products', url: 'http://products-service' }, { name: 'orders', url: 'http://orders-service' }], buildService: ({ url }) => new RemoteGraphQLDataSource({ url }) });",

  "export const implementSagaPattern = async (transaction: DistributedTransaction) => { try { await Promise.all([orderService.create(), paymentService.charge(), inventoryService.reserve()]); } catch (error) { await compensate([orderService.cancel(), paymentService.refund(), inventoryService.release()]); } };",

  "const setupKubernetesAutoscaling = () => k8s.createHPA({ minReplicas: 3, maxReplicas: 50, targetCPUUtilization: 70, targetMemoryUtilization: 80, scaleUp: { stabilizationWindow: '30s', policies: [{ type: 'Pods', value: 4, periodSeconds: 15 }] } });",

  "async function buildRealtimeAnalyticsDashboard(dataStream: Stream): Promise<Dashboard> { return dataStream.aggregate({ timeWindow: '1m', metrics: ['count', 'avg', 'p95', 'p99'] }).joinWithDimensions().calculateKPIs().visualize({ refreshRate: 1000 }); }",
]

export default function TypingCode() {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([])

  useEffect(() => {

    // Initialize code lines with slot-based positioning to prevent overlap
    const initialLines: CodeLine[] = []
    const lineCount = Math.min(Math.floor(window.innerHeight / 120), 8) // Increased spacing

    for (let i = 0; i < lineCount; i++) {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      initialLines.push({
        id: i,
        text: randomSnippet,
        typedText: '',
        x: Math.random() * 70, // percentage
        ySlot: i, // Each line gets its own vertical slot
        isTyping: false,
        isDone: false,
        fadeOut: false,
        charIndex: 0,
        speed: Math.random() * 35 + 25,
        hasTyped: false,
      })
    }

    setCodeLines(initialLines)

    // Start typing with staggered delays for continuous activity
    initialLines.forEach((line, index) => {
      setTimeout(() => {
        setCodeLines((prev) =>
          prev.map((l) => (l.id === line.id ? { ...l, isTyping: true } : l))
        )
      }, index * 400)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines((prev) =>
        prev.map((line) => {
          // If typing and not done
          if (line.isTyping && !line.isDone) {
            if (line.charIndex < line.text.length) {
              return {
                ...line,
                typedText: line.text.substring(0, line.charIndex + 1),
                charIndex: line.charIndex + 1,
                hasTyped: true,
              }
            } else {
              // Done typing, start fade out immediately for continuous effect
              setTimeout(() => {
                setCodeLines((current) =>
                  current.map((l) => (l.id === line.id ? { ...l, fadeOut: true } : l))
                )
              }, 800)
              return { ...line, isDone: true, isTyping: false }
            }
          }

          // If fading out, replace with new snippet, keeping same vertical slot
          if (line.fadeOut && line.hasTyped) {
            const newSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
            return {
              ...line,
              text: newSnippet,
              typedText: '',
              charIndex: 0,
              isDone: false,
              fadeOut: false,
              isTyping: true,
              hasTyped: false,
              x: Math.random() * 70, // New horizontal position
              // ySlot stays the same - keeps vertical slot
            }
          }

          return line
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Calculate vertical position from slot (ensures spacing between lines)
  const getYPosition = (slot: number, totalSlots: number) => {
    const usableHeight = 80 // Use 80% of height
    const startOffset = 10 // Start 10% from top
    return startOffset + (slot * usableHeight) / totalSlots
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <div
          key={line.id}
          className={`absolute font-mono text-xs sm:text-sm transition-opacity duration-700 ${
            line.fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            left: `${line.x}%`,
            top: `${getYPosition(line.ySlot, codeLines.length)}%`,
            color: 'rgba(147, 197, 253, 0.6)',
            textShadow: '0 0 12px rgba(147, 197, 253, 0.5), 0 0 3px rgba(147, 197, 253, 0.8)',
            maxWidth: '90%',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          <span className="inline-block">
            {line.typedText}
            {line.isTyping && (
              <span
                className="inline-block w-2 h-4 ml-1 align-middle animate-pulse"
                style={{
                  backgroundColor: '#60a5fa',
                  boxShadow: '0 0 12px rgba(96, 165, 250, 0.8), 0 0 4px rgba(96, 165, 250, 1)',
                }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
