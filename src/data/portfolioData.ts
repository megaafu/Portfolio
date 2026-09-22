import {
  ProcessStage,
  CorePrinciple,
  FlutterMzMetrics,
  TechPillar,
  FlagshipSystem,
  CharacterDiscipline,
  TimelineEntry,
  WebProductionProject,
  PublicMobileApp,
  ServicePlan
} from '../types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'stage-1',
    step: '01',
    phase: 'Phase 1',
    phasePt: 'Fase 1',
    title: 'Understand',
    titlePt: 'Compreender',
    description: 'Root-cause friction analysis, carrier drop boundaries, and user environment constraints before typing code.',
    descriptionPt: 'Análise de fricção na causa raiz, limites de quebra de sinal de operadoras e restrições de ambiente do utilizador antes de escrever código.',
    frictionBoundary: 'Friction Boundary',
    frictionBoundaryPt: 'Fronteira de Fricção',
    specType: 'Domain Spec',
    specTypePt: 'Especificação de Domínio',
    deepDive: {
      objectives: [
        'Map exact cellular blackout zones in rural and fringe peri-urban areas.',
        'Profile target user devices (sub-$60 Android devices with 1-2GB RAM).',
        'Isolate zero-trust boundary conditions for biometric and monetary data.'
      ],
      objectivesPt: [
        'Mapear zonas exatas de apagão celular em áreas rurais e periurbanas.',
        'Traçar perfil dos dispositivos alvo dos utilizadores (Android <$60 com 1-2GB de RAM).',
        'Isolar condições de fronteira zero-trust para dados biométricos e financeiros.'
      ],
      deliverables: [
        'Failure Mode & Effects Analysis (FMEA) document',
        'State machine edge case specification',
        'Strict entity data schemas in Protocol Buffers or Zod'
      ],
      deliverablesPt: [
        'Documento de Análise de Modos de Falha e Efeitos (FMEA)',
        'Especificação de casos extremos da máquina de estados',
        'Esquemas estritos de dados de entidades em Protocol Buffers ou Zod'
      ],
      realWorldScenario: 'In remote Zambezia, field registration agents lose 3G signals mid-transaction. Understanding this up front shifts architecture from optimistic cloud requests to strictly air-gapped local transactional queues.',
      realWorldScenarioPt: 'Na Zambézia remota, agentes de registo em campo perdem sinal 3G a meio da transação. Compreender isso de início transfere a arquitetura de pedidos otimistas na nuvem para filas transacionais locais estritamente isoladas.',
      guardrails: 'Never write UI components before domain invariants and offline fallback states are formally accepted.',
      guardrailsPt: 'Nunca escrever componentes de interface antes de os invariantes de domínio e estados de contingência offline serem formalmente aceites.'
    }
  },
  {
    id: 'stage-2',
    step: '02',
    phase: 'Phase 2',
    phasePt: 'Fase 2',
    title: 'Investigate',
    titlePt: 'Investigar',
    description: 'Direct edge probing on low-spec devices, latency jitter profiling, and carrier packet-drop simulation across rural links.',
    descriptionPt: 'Testes diretos em dispositivos de baixa especificação, perfilamento de jitter de latência e simulação de perda de pacotes em conexões rurais.',
    frictionBoundary: 'Signal Profiling',
    frictionBoundaryPt: 'Perfilamento de Sinal',
    specType: 'Edge Benchmarks',
    specTypePt: 'Benchmarks em Dispositivo',
    deepDive: {
      objectives: [
        'Emulate throttled 2G/EDGE networks (50-200kbps, 1500ms jitter, 25% drop rate).',
        'Benchmark native OCR & biometric face liveness on 32-bit ARM chipsets.',
        'Verify battery drain and temperature throttling under direct sunlight.'
      ],
      objectivesPt: [
        'Emular redes 2G/EDGE limitadas (50-200kbps, 1500ms de jitter, 25% de perda de pacotes).',
        'Avaliar OCR nativo e verificação biométrica facial em chipsets ARM de 32 bits.',
        'Verificar drenagem de bateria e limitação térmica sob luz solar direta.'
      ],
      deliverables: [
        'Network jitter & packet-loss benchmark matrix',
        'Memory leak profiling via Android Profiler / Instruments',
        'Cold-start latency budgets (<1.8s on low-end chipsets)'
      ],
      deliverablesPt: [
        'Matriz de benchmarks de jitter de rede e perda de pacotes',
        'Perfilamento de fugas de memória via Android Profiler / Instruments',
        'Orçamentos de latência de inicialização a frio (<1.8s em chipsets de entrada)'
      ],
      realWorldScenario: 'Stress-testing on-device OCR on an entry-level MediaTek device revealed high GC pressure when processing 8MP raw images; we inserted downsampling pipelines before memory allocation.',
      realWorldScenarioPt: 'Testes de stress com OCR num dispositivo MediaTek de entrada revelaram alta pressão de GC ao processar imagens raw de 8MP; inserimos pipelines de redução de resolução antes da alocação de memória.',
      guardrails: 'All API contracts must support payload compression and idempotent client retry tokens.',
      guardrailsPt: 'Todos os contratos de API devem suportar compressão de payload e tokens idempotentes de nova tentativa do cliente.'
    }
  },
  {
    id: 'stage-3',
    step: '03',
    phase: 'Phase 3',
    phasePt: 'Fase 3',
    title: 'Design',
    titlePt: 'Projetar',
    description: 'Deterministic state trees (BLoC), idempotent transactional schemas, and air-gapped queue boundaries.',
    descriptionPt: 'Árvores de estado determinísticas (BLoC), esquemas transacionais idempotentes e fronteiras de filas isoladas.',
    frictionBoundary: 'State Schemas',
    frictionBoundaryPt: 'Esquemas de Estado',
    specType: 'Idempotent Sync',
    specTypePt: 'Sincronização Idempotente',
    deepDive: {
      objectives: [
        'Draft uni-directional BLoC event flows with immutable state transitions.',
        'Define two-phase commit local SQLite queues for encrypted customer records.',
        'Construct cryptographic checksum verification for every outgoing payload.'
      ],
      objectivesPt: [
        'Desenhar fluxos de eventos BLoC unidirecionais com transições de estado imutáveis.',
        'Definir filas SQLite locais com two-phase commit para registos de clientes cifrados.',
        'Construir verificação criptográfica de checksum para todos os payloads de saída.'
      ],
      deliverables: [
        'State Transition Diagrams (Mermaid / PlantUML)',
        'Database migration scripts with backward compatibility guarantees',
        'Carrier webhook reconciliation schemas (M-Pesa / e-Mola)'
      ],
      deliverablesPt: [
        'Diagramas de Transição de Estados (Mermaid / PlantUML)',
        'Scripts de migração de base de dados com garantia de retrocompatibilidade',
        'Esquemas de reconciliação de webhooks de operadoras (M-Pesa / e-Mola)'
      ],
      realWorldScenario: 'Designing the offline queue with exponential backoff and persistent SQLite indexes prevented duplicate payment dispatch during intermittent network flaps.',
      realWorldScenarioPt: 'Desenhar a fila offline com backoff exponencial e índices SQLite persistentes preveniu duplicação no envio de pagamentos durante oscilações intermitentes de rede.',
      guardrails: 'Every write must be idempotent. Every remote mutation requires a unique idempotency key generated client-side.',
      guardrailsPt: 'Todas as escritas devem ser idempotentes. Cada mutação remota exige uma chave única de idempotência gerada pelo cliente.'
    }
  },
  {
    id: 'stage-4',
    step: '04',
    phase: 'Phase 4',
    phasePt: 'Fase 4',
    title: 'Build',
    titlePt: 'Construir',
    description: 'Clean architecture layers, strict type contracts (TypeScript/Dart), and zero-dependency domain cores.',
    descriptionPt: 'Camadas de Clean Architecture, contratos estritos de tipos (TypeScript/Dart) e núcleo de domínio sem dependências externas.',
    frictionBoundary: 'Type Safety',
    frictionBoundaryPt: 'Segurança de Tipos',
    specType: 'Clean Arch',
    specTypePt: 'Clean Architecture',
    deepDive: {
      objectives: [
        'Isolate Presentation, Domain, and Data layers with dependency inversion.',
        'Enforce compile-time type safety with zero `dynamic` or `any` escapades.',
        'Implement automated mock repositories for isolated unit testing.'
      ],
      objectivesPt: [
        'Isolar camadas de Apresentação, Domínio e Dados com inversão de dependência.',
        'Garantir segurança de tipos em tempo de compilação sem escapatórias para `dynamic` ou `any`.',
        'Implementar repositórios simulados (mocks) automatizados para testes unitários isolados.'
      ],
      deliverables: [
        'Production-grade Dart / TypeScript code with 90%+ core domain coverage',
        'Native platform channels for NFC chip access and hardware biometrics',
        'Fastify microservices with sub-2ms request routing'
      ],
      deliverablesPt: [
        'Código Dart / TypeScript de nível de produção com cobertura de mais de 90% do domínio central',
        'Canais de plataforma nativa para acesso a chips NFC e biometria por hardware',
        'Microsserviços Fastify com roteamento de pedidos em menos de 2ms'
      ],
      realWorldScenario: 'Decoupling the biometric hardware abstraction allowed switching between native OCR and fallback manual verification without altering domain business logic.',
      realWorldScenarioPt: 'Desacoplar a abstração do hardware biométrico permitiu alternar entre OCR nativo e verificação manual de contingência sem alterar a lógica de negócio do domínio.',
      guardrails: 'No framework-specific imports in the pure domain layer. Pure entities and use-cases only.',
      guardrailsPt: 'Nenhum import específico de framework na camada pura de domínio. Apenas entidades puras e casos de uso.'
    }
  },
  {
    id: 'stage-5',
    step: '05',
    phase: 'Phase 5',
    phasePt: 'Fase 5',
    title: 'Validate',
    titlePt: 'Validar',
    description: 'Automated Fastlane test suites, offline reconciliation verification, and zero-trust PII sanitization audits.',
    descriptionPt: 'Suítes de testes automatizados com Fastlane, validação de reconciliação offline e auditorias de sanitização de dados PII com zero-trust.',
    frictionBoundary: 'Automated CI',
    frictionBoundaryPt: 'CI Automatizado',
    specType: 'Zero-Trust PII',
    specTypePt: 'PII Zero-Trust',
    deepDive: {
      objectives: [
        'Execute automated end-to-end integration flows across virtual and physical devices.',
        'Audit client telemetry to ensure zero raw PII leaks into logs or Sentry.',
        'Simulate sudden battery disconnection during SQLite transactional commits.'
      ],
      objectivesPt: [
        'Executar fluxos automatizados de integração end-to-end em dispositivos virtuais e físicos.',
        'Auditar a telemetria do cliente para assegurar zero fuga de PII em logs ou no Sentry.',
        'Simular desconexão repentina de bateria durante commits transacionais no SQLite.'
      ],
      deliverables: [
        'Fastlane release pipelines for automated APK / AAB signing and distribution',
        'PII sanitizer unit test assertions and automated regression suites',
        'Chaos engineering network recovery verification logs'
      ],
      deliverablesPt: [
        'Pipelines de release Fastlane para assinatura e distribuição automatizadas de APK / AAB',
        'Asserções em testes unitários do sanitizador de PII e suítes automatizadas de regressão',
        'Logs de verificação de recuperação de rede sob testes de caos'
      ],
      realWorldScenario: 'Custom sanitizers scrubbed credit card numbers, national IDs, and M-Pesa transaction PINs prior to sending error logs to centralized Datadog servers.',
      realWorldScenarioPt: 'Sanitizadores personalizados limparam números de cartões, bilhetes de identidade e PINs de transação M-Pesa antes do envio de logs de erro para servidores centralizados Datadog.',
      guardrails: 'A single unmasked PII field in CI output immediately breaks the build and prevents deployment.',
      guardrailsPt: 'Um único campo de PII sem máscara na saída do CI quebra imediatamente a compilação e bloqueia o deploy.'
    }
  },
  {
    id: 'stage-6',
    step: '06',
    phase: 'Phase 6',
    phasePt: 'Fase 6',
    title: 'Improve',
    titlePt: 'Evoluir',
    description: 'Telemetry tracing, query index optimization, developer tooling, and clean architectural documentation handoff.',
    descriptionPt: 'Rastreio de telemetria, otimização de índices de consultas, ferramentas de desenvolvedor e entrega de documentação arquitetural limpa.',
    frictionBoundary: 'Continuous SRE',
    frictionBoundaryPt: 'SRE Contínuo',
    specType: 'Zero Debt',
    specTypePt: 'Zero Dívida',
    deepDive: {
      objectives: [
        'Analyze production OpenTelemetry traces to identify database query bottlenecks.',
        'Optimize SQLite B-tree indexes for rapid 100k+ record searching.',
        'Author interactive documentation, ADRs (Architectural Decision Records), and engineering playbooks.'
      ],
      objectivesPt: [
        'Analisar traces OpenTelemetry em produção para identificar gargalos em queries de base de dados.',
        'Otimizar índices B-tree no SQLite para pesquisas instantâneas em mais de 100.000 registos.',
        'Redigir documentação interativa, ADRs (Registos de Decisões de Arquitetura) e manuais de engenharia.'
      ],
      deliverables: [
        'Post-deployment performance telemetry dashboard',
        'Architectural Decision Records (ADRs) in repository root',
        'Developer onboarding guide and CI script automations'
      ],
      deliverablesPt: [
        'Painel de telemetria de performance pós-deploy',
        'Registos de Decisões de Arquitetura (ADRs) na raiz do repositório',
        'Guia de integração de desenvolvedores e automações de scripts de CI'
      ],
      realWorldScenario: 'By refactoring SQLite indexes and switching to memory-mapped files, local search over 20,000 subscriber records dropped from 840ms to 18ms.',
      realWorldScenarioPt: 'Ao refatorar índices SQLite e migrar para ficheiros mapeados em memória (mmap), a pesquisa local em mais de 20.000 registos caiu de 840ms para 18ms.',
      guardrails: 'No code is considered "done" without updated architecture diagrams and runbooks.',
      guardrailsPt: 'Nenhum código é considerado "concluído" sem diagramas de arquitetura e manuais de operação atualizados.'
    }
  }
];

export const TECH_PILLARS: TechPillar[] = [
  {
    id: 'mobile-edge',
    title: 'Mobile & Edge',
    titlePt: 'Mobile & Dispositivos',
    tag: 'Core Mastery',
    tagPt: 'Domínio Central',
    iconName: 'smartphone',
    description: 'Offline-first resilience, encrypted local store, hardware NFC chip decoding, zero-leak memory lifecycle.',
    descriptionPt: 'Resiliência offline-first, persistência cifrada local, leitura direta de chips NFC e gestão rigorosa de ciclo de vida de memória.',
    tags: ['Flutter', 'Dart', 'BLoC / Cubit', 'Hive & SQLite', 'Hardware NFC', 'Edge Document OCR', 'Fastlane'],
    footerLeft: 'iOS & Android',
    footerLeftPt: 'iOS & Android',
    footerRight: 'Offline-First',
    footerRightPt: 'Offline-First',
    metrics: [
      { label: 'Local Store Sync', labelPt: 'Sync Local', value: '100% Zero-Loss' },
      { label: 'Cold Boot', labelPt: 'Arranque a Frio', value: '<1.4s on 1GB RAM' }
    ]
  },
  {
    id: 'frontend-arch',
    title: 'Frontend Architecture',
    titlePt: 'Arquitetura Frontend',
    tag: 'Web & Portals',
    tagPt: 'Web & Portais',
    iconName: 'monitor',
    description: 'Deterministic type safety, accessible audit systems, rendering 100k+ records smoothly without UI frame drops.',
    descriptionPt: 'Segurança de tipos determinística, auditoria de acessibilidade e renderização suave de mais de 100 mil registos sem quebra de frames.',
    tags: ['Next.js 15 / React 19', 'TypeScript', 'TailwindCSS', 'React Query', 'CASL RBAC', 'Zod Validation'],
    footerLeft: 'Enterprise Portals',
    footerLeftPt: 'Portais Empresariais',
    footerRight: 'Type-Safe',
    footerRightPt: 'Tipagem Estrita',
    metrics: [
      { label: 'Virtual Records', labelPt: 'Registos Virtuais', value: '100k+ Smooth' },
      { label: 'RBAC Latency', labelPt: 'Latência RBAC', value: '<0.5ms Rule Eval' }
    ]
  },
  {
    id: 'backend-payments',
    title: 'Backend & Payments',
    titlePt: 'Backend & Pagamentos',
    tag: 'Services & Rails',
    tagPt: 'Serviços & Rails',
    iconName: 'server',
    description: 'High-concurrency Node.js & Fastify microservices integrated with carrier mobile money infrastructure.',
    descriptionPt: 'Microsserviços de alta concorrência em Node.js & Fastify integrados com infraestrutura móvel de dinheiro eletrónico das operadoras.',
    tags: ['Fastify', 'Node.js', 'PostgreSQL', 'Redis', 'M-Pesa API', 'e-Mola API', 'Docker'],
    footerLeft: 'High Concurrency',
    footerLeftPt: 'Alta Concorrência',
    footerRight: '<2ms Parse',
    footerRightPt: 'Processamento <2ms',
    metrics: [
      { label: 'Webhook Parse', labelPt: 'Parse de Webhook', value: '<2ms Regex Engine' },
      { label: 'Availability', labelPt: 'Disponibilidade', value: '99.98% Uptime' }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'AI Agents & Systems',
    titlePt: 'Sistemas & Agentes de IA',
    tag: 'Deterministic AI',
    tagPt: 'IA Determinística',
    iconName: 'bot',
    description: 'Dual-model inference routers with deterministic guardrails, Cursor multi-IDE schemas, and WhatsApp agents.',
    descriptionPt: 'Roteamento duplo de modelos com salvaguardas determinísticas, esquemas multi-IDE para Cursor e agentes WhatsApp.',
    tags: ['Gemini API', 'Groq Llama-3', 'Cursor Rules', 'Vercel AI SDK', 'LangGraph', 'WhatsApp Cloud API'],
    footerLeft: 'Cost Efficiency',
    footerLeftPt: 'Eficiência de Custos',
    footerRight: '-65% Token Spend',
    footerRightPt: '-65% Custos Token',
    metrics: [
      { label: 'Rule Engine', labelPt: 'Motor de Regras', value: '571 System Rules' },
      { label: 'Cost Reduction', labelPt: 'Redução de Custos', value: '65% Token Savings' }
    ]
  }
];

export const FLAGSHIP_SYSTEMS: FlagshipSystem[] = [
  {
    id: 'biometric-edge-onboarding',
    category: 'Digital Identity & Edge Biometrics',
    categoryPt: 'Identidade Digital & Biometria em Dispositivo',
    statusText: 'Production Deployed',
    statusTextPt: 'Implementado em Produção',
    statusType: 'production',
    title: 'Offline-First Biometric Identity & NFC Verification Client',
    titlePt: 'Cliente Móvel Offline-First de Identidade Biométrica & Verificação NFC',
    summary: 'Architected an offline-first mobile client for remote citizen enrollment. Communicates with native NFC antenna hardware for encrypted identity extraction, incorporates on-device document OCR, and maintains encrypted local SQLite queues for zero data loss in complete network blackouts.',
    summaryPt: 'Arquitetei cliente móvel offline-first para recenseamento remoto de cidadãos. Comunica diretamente com antenas NFC de cartões de identificação para extração cifrada, executa OCR no próprio dispositivo e mantém filas transacionais SQLite locais com zero perda de dados em zonas sem sinal.',
    role: 'Lead Mobile Architect • Flutter & SQLite',
    rolePt: 'Arquiteto Mobile Principal • Flutter & SQLite',
    keyCapability: 'Hardware NFC Bridge • Zero-Loss Air-Gapped Sync',
    keyCapabilityPt: 'Ponte de Hardware NFC • Sincronização Segura Offline',
    location: 'Southern Africa • Field Deployed',
    deliveryPipeline: 'Automated CI/CD',
    highlights: [
      'Engineered a native Android/iOS method channel layer communicating with physical NFC antennas to extract encrypted identity payloads from citizen cards.',
      'Constructed a two-tier storage layer: instantaneous ephemeral Hive caches for snappy UI state, paired with an encrypted SQLite database for air-gapped subscriber queues.',
      'Achieved zero data loss across 10,000+ field enrollments conducted in zones with complete cellular blackouts.',
      'Automated release packaging and code signing using Fastlane pipelines, reducing deployment friction from 3 hours to 8 minutes.'
    ],
    highlightsPt: [
      'Desenvolvi camada nativa de canais Android/iOS para leitura de antenas NFC em cartões de identidade oficiais.',
      'Construí arquitetura de armazenamento em dois níveis: cache Hive para resposta imediata de interface e base SQLite cifrada para filas de registo sem rede.',
      'Alcancei 0,00% de perda de dados em mais de 10.000 registos de campo em zonas com apagão total de rede celular.',
      'Automatizei o empacotamento e assinatura de builds via Fastlane, reduzindo o tempo de deploy de 3 horas para 8 minutos.'
    ],
    architectureNotes: 'Hardware Antenna -> Native Driver -> Secure BLoC Queue -> Encrypted SQLite -> Background Worker -> Mutual TLS Endpoint.',
    metrics: [
      { label: 'Field Enrollments', labelPt: 'Registos de Campo', value: '10,000+' },
      { label: 'Data Loss Rate', labelPt: 'Taxa de Perda', value: '0.000%' },
      { label: 'NFC Read Latency', labelPt: 'Leitura NFC', value: '<420ms' },
      { label: 'Architecture', labelPt: 'Arquitetura', value: 'Offline-First' }
    ],
    techStack: ['Flutter', 'Dart', 'NFC Hardware Bridge', 'Document OCR', 'Hive', 'SQLite SQLCipher', 'Fastify']
  },
  {
    id: 'telecom-subscriber-provisioning',
    category: 'Telecom Infrastructure',
    categoryPt: 'Infraestrutura de Telecomunicações',
    statusText: 'Carrier Scale',
    statusTextPt: 'Escala de Operadora',
    statusType: 'carrier',
    title: 'High-Availability Telecom Subscriber Provisioning Engine',
    titlePt: 'Motor de Provisionamento de Subscritores para Telecomunicações de Alta Disponibilidade',
    summary: 'Modernized mission-critical subscriber SIM registration state machines across nationwide distribution channels. Migrated build architecture to AGP 9.1 with type-safe Kotlin DSL, implementing idempotent background retry workers to withstand rural cellular outages.',
    summaryPt: 'Modernização de máquinas de estado de registo de cartões SIM para canais de distribuição a nível nacional. Migrei a arquitetura de compilação para AGP 9.1 com Kotlin DSL tipado, implementando rotinas idempotentes de sincronização em segundo plano para resistir a falhas de rede rural.',
    role: 'Staff Telecom Architect • Android & Kotlin DSL',
    rolePt: 'Arquiteto de Telecomunicações Staff • Android & Kotlin DSL',
    keyCapability: 'Idempotent Offline Sync • Kotlin DSL',
    keyCapabilityPt: 'Sincronização Idempotente Offline • Kotlin DSL',
    location: 'Nationwide Carrier Infrastructure',
    deliveryPipeline: 'Nationwide Distribution',
    highlights: [
      'Led the end-to-end migration of mission-critical telecom codebase from deprecated Groovy Gradle scripts to AGP 9.1 and type-safe Kotlin DSL.',
      'Rebuilt registration state machine with local postal code resolution and offline SIM serial validation.',
      'Authored idempotent exponential backoff synchronization workers using Android WorkManager with network constraint triggers.',
      'Reduced build configuration warnings by 95% and cut clean compile times by 38%.'
    ],
    highlightsPt: [
      'Liderei a migração integral da base de código legada em Groovy Gradle para AGP 9.1 e Kotlin DSL tipado.',
      'Reconstruí a máquina de estados de registo com validação offline de números de série SIM e códigos postais locais.',
      'Implementei trabalhadores de sincronização com recuo exponencial via Android WorkManager acionados por restrições de conectividade.',
      'Eliminei 95% dos avisos de build e reduzi o tempo de compilação limpa em 38%.'
    ],
    architectureNotes: 'WorkManager Worker -> Network Constraint Listener -> Idempotent Batch Processor -> Telecom Carrier Core Gateway.',
    metrics: [
      { label: 'Build Time Reduction', labelPt: 'Redução de Build', value: '38% Faster' },
      { label: 'Sync Success Rate', labelPt: 'Taxa de Sincronização', value: '99.96%' },
      { label: 'Build Architecture', labelPt: 'Arquitetura de Build', value: 'AGP 9.1 Kotlin DSL' },
      { label: 'Geographic Scale', labelPt: 'Escala Geográfica', value: 'Nationwide' }
    ],
    techStack: ['Android Native', 'Kotlin DSL', 'AGP 9.1', 'WorkManager', 'SQLite', 'Carrier SIM API', 'ProGuard']
  },
  {
    id: 'fintech-webhook-ledger',
    category: 'FinTech & Mobile Money Rails',
    categoryPt: 'FinTech & Rails de Dinheiro Móvel',
    statusText: 'Sub-2ms Processing',
    statusTextPt: 'Processamento Sub-2ms',
    statusType: 'bilingual',
    title: 'Deterministic Payment Webhook Parser & Autonomous Financial Ledger',
    titlePt: 'Parser Determinístico de Webhooks de Pagamento & Livro Financeiro Autónomo',
    summary: 'Engineered a sub-2ms deterministic regex parsing engine for mobile money SMS webhooks. Paired with an automated conversational WhatsApp ledger assistant handling community rotational contributions, automated penalty tracking, and verified real-time payout queues with zero balance drift.',
    summaryPt: 'Desenvolvimento de motor de parsing regex determinístico sub-2ms para webhooks SMS de dinheiro móvel (M-Pesa e e-Mola). Integrado com assistente conversacional via WhatsApp para gestão de contribuições rotativas comunitárias, cálculo automático de penalidades e liquidações em tempo real com zero desvio de saldo.',
    role: 'Full Stack FinTech Architect',
    rolePt: 'Arquiteto FinTech Full-Stack',
    keyCapability: '<2ms Deterministic Extraction • Zero Balance Drift',
    keyCapabilityPt: 'Extração Determinística <2ms • Zero Desvio de Saldo',
    location: 'Sub-Saharan Financial Rails',
    deliveryPipeline: 'High-Throughput Settlement',
    highlights: [
      'Crafted high-speed deterministic regex parser extracting confirmation codes, transaction amounts, timestamps, and sender names in under 1.8ms per carrier SMS.',
      'Designed conversational assistant tracking rotational contributions, penalties, and payout queues with natural language financial verification.',
      'Integrated dual-model router: lightweight deterministic parser for financial ledgers, paired with LLM context memory for informal queries.',
      'Zero balance drift across thousands of simulated rotational savings cycles.'
    ],
    highlightsPt: [
      'Criei parser regex determinístico de alta velocidade que extrai códigos de confirmação, valores, datas e remetentes em menos de 1,8ms por SMS.',
      'Projetei assistente conversacional para gestão de poupanças rotativas, multas automáticas e liquidações com verificação matemática rigorosa.',
      'Integrei roteador duplo: motor determinístico para operações financeiras e IA conversacional contextual para dúvidas informais.',
      'Zero desvio de saldo em milhares de ciclos transacionais simulados.'
    ],
    architectureNotes: 'Carrier SMS Webhook -> Fastify Microservice -> Deterministic Regex Engine -> Ledger Verification -> WhatsApp Cloud API Webhook.',
    metrics: [
      { label: 'Parse Latency', labelPt: 'Latência de Parsing', value: '1.8ms Avg' },
      { label: 'Ledger Accuracy', labelPt: 'Precisão Contábil', value: '100% Deterministic' },
      { label: 'Integration Rails', labelPt: 'Canais de Integração', value: 'Mobile Money Webhooks' },
      { label: 'Balance Drift', labelPt: 'Desvio de Saldo', value: '0.00%' }
    ],
    techStack: ['Fastify', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WhatsApp Cloud API', 'Idempotent Queues']
  },
  {
    id: 'regtech-zero-trust-portal',
    category: 'Enterprise Governance & RegTech',
    categoryPt: 'Governança Corporativa & RegTech',
    statusText: 'Enterprise Deployed',
    statusTextPt: 'Implementado em Produção',
    statusType: 'enterprise',
    title: 'Enterprise Zero-Trust Compliance Portal & Telemetry Sanitization',
    titlePt: 'Portal Corporativo Zero-Trust de Conformidade & Sanitização de Telemetria',
    summary: 'Constructed high-throughput administrative command portals rendering over 100,000 regulatory records at 60 FPS. Engineered granular CASL role-based access control (RBAC) and recursive zero-trust telemetry sanitization that automatically scrubs sensitive PII across all logging pipelines and audit trails.',
    summaryPt: 'Construção de portais de comando administrativo de alto débito renderizando mais de 100.000 registos regulatórios a 60 FPS. Implementei controlo de acesso baseado em funções (CASL RBAC) e sanitização recursiva de telemetria que expurga dados confidenciais de clientes de todos os registos e auditorias.',
    role: 'Senior Frontend & Security Architect',
    rolePt: 'Arquiteto Frontend Sénior & Segurança',
    keyCapability: 'CASL RBAC • Recursive PII Scrubbing',
    keyCapabilityPt: 'CASL RBAC • Sanitização Recursiva de Dados',
    location: 'Enterprise Banking & Telecom',
    deliveryPipeline: 'Next.js 15 + CASL',
    highlights: [
      'Architected virtualized data tables rendering over 100,000 regulatory records at 60 FPS without memory bloat or DOM node explosions.',
      'Constructed role-based access control (RBAC) engine utilizing CASL, evaluating multi-tenant permission rules in under 0.5ms.',
      'Authored recursive sanitization engine that scrubs citizen IDs, telephone numbers, card numbers, and secret tokens from all logging pipelines.',
      'Passed strict multi-jurisdictional banking and telecom security compliance audits with zero findings.'
    ],
    highlightsPt: [
      'Arquitetei tabelas virtualizadas renderizando mais de 100.000 registos regulatórios a 60 FPS sem consumo excessivo de memória.',
      'Construí motor de controlo de acesso com CASL, avaliando permissões multi-inquilino em menos de 0,5ms.',
      'Desenvolvi motor de sanitização recursiva que expurga números de identificação, contactos e dados confidenciais dos pipelines de log.',
      'Aprovado com zero inconformidades em auditorias rigorosas de segurança bancária e telecomunicações.'
    ],
    architectureNotes: 'Incoming Telemetry -> Recursive Key Traversal -> Regular Expression Masking Pattern -> Zero-PII Logging Pipeline.',
    metrics: [
      { label: 'Render Scale', labelPt: 'Escala de Renderização', value: '100,000+ Records' },
      { label: 'RBAC Latency', labelPt: 'Latência de Permissões', value: '<0.5ms' },
      { label: 'Compliance Audit', labelPt: 'Auditoria de Segurança', value: 'Zero Inconformidades' },
      { label: 'UI Performance', labelPt: 'Desempenho de Interface', value: 'Locked 60 FPS' }
    ],
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'CASL RBAC', 'TanStack Virtual', 'Zod']
  },
  {
    id: 'agentic-ai-governance',
    category: 'AI Systems Architecture',
    categoryPt: 'Arquitetura de Sistemas de IA',
    statusText: 'Production Tooling',
    statusTextPt: 'Ferramentas de Produção',
    statusType: 'system',
    title: 'Dual-Tier Agentic AI Governance & Multi-IDE Systems Architecture',
    titlePt: 'Governança Agêntica de IA em Dois Níveis & Arquitetura Multi-IDE',
    summary: 'Engineered multi-IDE architectural governance harnesses for AI coding assistants. Implemented cost-aware model routing: fast lightweight models for AST transformations and linting, reserving frontier reasoning for complex schema migrations, cutting LLM token costs by ~65% with automated pre-commit gates.',
    summaryPt: 'Desenvolvimento de regras arquiteturais multi-IDE para assistentes de programação de IA. Implementei roteamento inteligente de modelos: modelos rápidos e económicos para transformações sintáticas de AST e modelos de raciocínio de ponta para migrações complexas de esquemas, reduzindo os custos de tokens em ~65% com verificações automatizadas de pré-commit.',
    role: 'Agentic Systems & Architecture Lead',
    rolePt: 'Líder de Arquitetura & Sistemas Agênticos',
    keyCapability: 'Cost-Aware Model Routing • Schema Gates',
    keyCapabilityPt: 'Roteamento Inteligente de Modelos • Portas de Esquema',
    location: 'Global Engineering Operations',
    deliveryPipeline: 'Automated Verification Gates',
    highlights: [
      'Engineered an architectural rule harness comprising systematic rules for AI coding assistants across Cursor, Claude, and OpenCode.',
      'Implemented cost-aware model routing: routing trivial AST transformations and style checks to sub-cent fast models while reserving frontier reasoning models for complex domain migrations.',
      'Integrated pre-commit schema verification preventing AI agents from introducing breaking changes or hallucinated API parameters.',
      'Demonstrated ~65% reduction in monthly LLM token expenditure while boosting commit quality and test-passing ratios.'
    ],
    highlightsPt: [
      'Projetei catálogo de regras arquiteturais sistemáticas para assistentes de IA em ambientes Cursor, Claude e OpenCode.',
      'Implementei roteamento inteligente de modelos, direcionando tarefas simples a modelos rápidos e reservando modelos de topo para migrações estruturais.',
      'Integrei verificações de pré-commit que impedem a introdução de alterações destrutivas ou parâmetros inexistentes por agentes de IA.',
      'Comprovei redução de ~65% nos custos mensais de tokens mantendo maior qualidade e conformidade de testes.'
    ],
    architectureNotes: 'Developer Prompt -> Multi-IDE Hook -> Semantic Complexity Classifier -> Tiered Model Router -> Automated Pre-commit Gate.',
    metrics: [
      { label: 'Token Cost Reduction', labelPt: 'Economia em Tokens', value: '~65% Savings' },
      { label: 'Architectural Spec', labelPt: 'Especificação', value: 'Tipagem Estrita' },
      { label: 'Verification Gates', labelPt: 'Portas de Validação', value: 'Pré-commit Automático' },
      { label: 'IDE Compatibility', labelPt: 'Compatibilidade IDE', value: 'Multi-IDE' }
    ],
    techStack: ['Multi-IDE Rules', 'Vercel AI SDK', 'TypeScript', 'AST Transformers', 'Automated CI Gates']
  }
];

export const CHARACTER_DISCIPLINES: CharacterDiscipline[] = [
  {
    id: 'strategy-gaming',
    disciplineNumber: 'Discipline 01',
    disciplineNumberPt: 'Disciplina 01',
    title: 'Strategy Gaming & Latency Conditioning',
    titlePt: 'Jogos de Estratégia & Condicionamento sob Latência',
    description: 'Tekken frame data calculation, resource adaptation under time scarcity, and split-second tactical reflexes under intense competitive latency.',
    descriptionPt: 'Cálculo de frame data no Tekken, gestão de recursos sob escassez de tempo e reflexos táticos imediatos sob alta latência competitiva.',
    leadershipBridge: 'Systems Analysis & Composure',
    leadershipBridgePt: 'Análise de Sistemas & Sangue Frio',
    iconName: 'gamepad',
    extendedInsight: 'Competitive fighting games operate on strict 16.6ms frame windows. When an unexpected production incident strikes or an API times out, the conditioned reflex is composure, rapid triage of threat states, and decisive recovery.',
    extendedInsightPt: 'Jogos de luta competitivos operam em janelas rígidas de 16,6ms por frame. Quando ocorre um incidente inesperado em produção ou uma API falha, o reflexo condicionado é calma, triagem rápida de ameaças e recuperação decisiva.'
  },
  {
    id: 'physical-fitness',
    disciplineNumber: 'Discipline 02',
    disciplineNumberPt: 'Disciplina 02',
    title: 'Physical Fitness & Progressive Overload',
    titlePt: 'Condicionamento Físico & Sobrecarga Progressiva',
    description: 'Strict progressive overload strength training, deliberate recovery protocols, and daily consistency powering uninterrupted deep focus for multi-hour debugging sprints.',
    descriptionPt: 'Treino de força com sobrecarga progressiva estrita, protocolos deliberados de recuperação e consistência diária para manter foco profundo em longas sessões de debugging.',
    leadershipBridge: 'Endurance & Relentless Execution',
    leadershipBridgePt: 'Resistência & Execução Implacável',
    iconName: 'dumbbell',
    extendedInsight: 'Consistent physical resistance training instills biological grit. The mental endurance required to pull through high-stress system migrations and long debugging sprints directly mirrors disciplined gym progression.',
    extendedInsightPt: 'O treino de resistência física desenvolve resiliência biológica. A energia mental necessária para conduzir migrações de alta pressão reflete diretamente a disciplina na progressão de cargas.'
  },
  {
    id: 'style-proportions',
    disciplineNumber: 'Discipline 03',
    disciplineNumberPt: 'Disciplina 03',
    title: 'Style, Proportions & Tailoring',
    titlePt: 'Estilo, Proporções & Alfaiataria',
    description: 'Classic Neapolitan and bespoke tailoring proportions translated directly into visual restraint, structural negative space rhythm, and typographic hierarchy.',
    descriptionPt: 'Proporções clássicas da alfaiataria napolitana traduzidas diretamente em contenção visual, ritmo de espaço negativo e hierarquia tipográfica.',
    leadershipBridge: 'Aesthetic Rigor & UX Restraint',
    leadershipBridgePt: 'Rigor Estético & Contenção de UX',
    iconName: 'scissors',
    extendedInsight: 'In bespoke tailoring, fit is defined by millimeter balances and knowing what to subtract. In UI/UX and software architecture, craftsmanship means pristine spacing, razor-sharp typography, and eliminating unnecessary visual noise.',
    extendedInsightPt: 'Na alfaiataria sob medida, o corte perfeito é definido pelo equilíbrio milimétrico e por saber o que subtrair. No software, artesanato significa espaçamento impecável e zero ruído visual.'
  },
  {
    id: 'cognitive-models',
    disciplineNumber: 'Discipline 04',
    disciplineNumberPt: 'Disciplina 04',
    title: 'Cognitive Models & Decision Theory',
    titlePt: 'Modelos Cognitivos & Teoria da Decisão',
    description: 'First-principles reduction, probabilistic Bayesian heuristics, and behavioral friction mapping applied to clarify ambiguous user journeys and system contracts.',
    descriptionPt: 'Redução a primeiros princípios, heurísticas bayesianas probabilísticas e mapeamento de fricção comportamental para clarificar jornadas e contratos ambíguos.',
    leadershipBridge: 'Mental Models & First Principles',
    leadershipBridgePt: 'Modelos Mentais & Primeiros Princípios',
    iconName: 'brain',
    extendedInsight: 'Engineering trade-offs are rarely black and white. Utilizing structured mental models (Chesterton’s Fence, Inversion, Pareto frontiers) prevents knee-jerk rewrites and isolates the true root constraint.',
    extendedInsightPt: 'Compromissos de engenharia raramente são óbvios. Usar modelos mentais estruturados (Cerca de Chesterton, Inversão, Fronteiras de Pareto) previne refatorações impulsivas e isola o verdadeiro gargalo.'
  },
  {
    id: 'rapid-lab-work',
    disciplineNumber: 'Discipline 05',
    disciplineNumberPt: 'Disciplina 05',
    title: 'Rapid Lab Work & Prototyping',
    titlePt: 'Laboratório Experimental & Prototipagem Rápida',
    description: 'Continuous weekend exploration prototyping frontier LLM tool-use, WebSocket streaming engines, generative UI patterns, and emerging African telco payment rails.',
    descriptionPt: 'Exploração contínua prototipando ferramentas avançadas de LLM, motores de streaming WebSocket, padrões de generative UI e novos rails de pagamento móvel africanos.',
    leadershipBridge: 'Applied AI & R&D Velocity',
    leadershipBridgePt: 'IA Aplicada & Velocidade de I&D',
    iconName: 'flask',
    extendedInsight: 'Hands-on experimentation keeps senior engineering grounded in real code. By constantly building sandbox proofs-of-concept, new technologies are vetted in a sandbox long before entering mission-critical production pipelines.',
    extendedInsightPt: 'Experimentação prática mantém a engenharia sénior alicerçada em código real. Construir provas de conceito em sandbox valida novas tecnologias muito antes de entrarem em produção crítica.'
  },
  {
    id: 'african-mentorship',
    disciplineNumber: 'Discipline 06',
    disciplineNumberPt: 'Disciplina 06',
    title: 'African Tech Mentorship & Community',
    titlePt: 'Mentoria Técnica Africana & Comunidade',
    description: 'Cultivating the next generation of Mozambican and African engineers through rigorous code reviews, production architecture workshops, and pragmatic career guidance.',
    descriptionPt: 'Capacitando a nova geração de engenheiros moçambicanos e africanos através de revisões rigorosas de código, workshops práticos de arquitetura e orientação de carreira.',
    leadershipBridge: 'Community Elevation & Culture',
    leadershipBridgePt: 'Elevação da Comunidade & Cultura',
    iconName: 'users',
    extendedInsight: 'True technical seniority is measured by how much you elevate the engineers around you. Leading workshops for 100+ African engineers at Flutter MZ builds sustainable regional developer ecosystems.',
    extendedInsightPt: 'A verdadeira senioridade técnica mede-se pelo impacto na equipa ao seu redor. Liderar formações para mais de 100 engenheiros africanos no Flutter MZ fortalece o ecossistema regional de tecnologia.'
  }
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: 'role-1',
    role: 'Senior Full Stack & Mobile Developer',
    rolePt: 'Desenvolvedor Full Stack & Mobile Sénior',
    period: 'Feb 2026 – Present',
    periodPt: 'Fev 2026 – Presente',
    organization: 'Enterprise Digital Identity & Telecom Group',
    location: 'Maputo, Mozambique',
    summary: 'Leading client mobile architecture and backend integrations. Shipped offline-first biometric Flutter clients with contactless hardware NFC card data extraction, edge OCR, Fastify backend microservices, and automated Fastlane CI/CD delivery.',
    summaryPt: 'Liderança de arquitetura móvel e integrações de backend. Implementação de clientes Flutter biométricos offline-first com leitura NFC sem contacto de cartões de identidade, OCR em dispositivo, microsserviços Fastify e entrega automatizada Fastlane CI/CD.',
    tags: ['Flutter', 'Hardware NFC / Edge OCR', 'Fastify', 'Fastlane'],
    achievements: [
      'Spearheaded the mobile architecture for biometric registration across remote field deployment sites.',
      'Integrated hardware NFC chip reading and on-device optical character recognition for official identity documents.',
      'Reduced manual store release cycles from hours to automated minutes using Fastlane CI/CD pipelines.',
      'Mentored engineering squad on Clean Architecture and deterministic BLoC state management.'
    ],
    achievementsPt: [
      'Liderei a arquitetura móvel para registo biométrico em missões remotas de campo.',
      'Integrei leitura física de chips NFC e reconhecimento ótico de caracteres (OCR) para documentos oficiais.',
      'Reduzi os ciclos manuais de publicação de horas para minutos automatizados com pipelines Fastlane CI/CD.',
      'Orientei o esquadrão de engenharia em Clean Architecture e gestão determinística de estados com BLoC.'
    ]
  },
  {
    id: 'role-2',
    role: 'Software Developer',
    rolePt: 'Desenvolvedor de Software',
    period: 'Dec 2022 – Jan 2026',
    periodPt: 'Dez 2022 – Jan 2026',
    organization: 'Fintech Rails & Enterprise Software Group',
    location: 'Mozambique',
    summary: 'Architected high-reliability mobile clients, Next.js backoffice command portals, and automated database reconciliation flows with carrier payment processors (M-Pesa, e-Mola).',
    summaryPt: 'Arquitetura de aplicações móveis de alta disponibilidade, portais de comando administrativo em Next.js e rotinas automatizadas de reconciliação com operadoras de pagamento móvel (M-Pesa e e-Mola).',
    tags: ['Flutter', 'Next.js', 'M-Pesa / e-Mola', 'PostgreSQL'],
    achievements: [
      'Built and maintained distributed payment webhook processing microservices handling high transaction volumes.',
      'Engineered real-time administrative command dashboards in Next.js with role-based access control.',
      'Implemented automated reconciliation jobs ensuring zero discrepancies between telecom telco ledgers and internal databases.'
    ],
    achievementsPt: [
      'Desenvolvi e mantive microsserviços distribuídos de processamento de webhooks para altos volumes de transações.',
      'Construí painéis administrativos em tempo real em Next.js com controlo granular de acesso (RBAC).',
      'Implementei rotinas automáticas de reconciliação garantindo zero discrepâncias entre extratos de telecomunicações e bases de dados internas.'
    ]
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Software Engineering',
    rolePt: 'Licenciatura em Engenharia Informática',
    period: 'Graduated',
    periodPt: 'Concluído',
    organization: 'Universidade São Tomás de Moçambique (USTM)',
    location: 'Maputo, Mozambique',
    summary: 'Distributed system architectures, relational database normal forms, algorithmic complexity, and structured engineering methodologies.',
    summaryPt: 'Arquitetura de sistemas distribuídos, formas normais de bases de dados relacionais, complexidade algorítmica e metodologias estruturadas de engenharia.',
    tags: ['Distributed Systems', 'Relational DBs', 'Algorithms', 'Software Architecture'],
    isEducation: true
  },
  {
    id: 'edu-2',
    role: 'Technical Diploma in Computer Systems',
    rolePt: 'Diploma Técnico em Sistemas Informáticos',
    period: 'Completed',
    periodPt: 'Concluído',
    organization: 'Instituto de Transportes e Comunicações (ITC)',
    location: 'Maputo, Mozambique',
    summary: 'Telecom networks, hardware protocols, operating systems, and core systems programming fundamentals.',
    summaryPt: 'Redes de telecomunicações, protocolos de hardware, sistemas operativos e fundamentos de programação de baixo nível.',
    tags: ['Telecom Networks', 'Hardware Protocols', 'Operating Systems', 'Low-Level Systems'],
    isEducation: true
  }
];

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    title: 'Radical Clarity',
    titlePt: 'Clareza Radical',
    desc: 'Explicit contracts & boundary schemas',
    descPt: 'Contratos explícitos & esquemas de fronteira'
  },
  {
    title: 'Simplicity First',
    titlePt: 'Simplicidade em Primeiro Lugar',
    desc: 'Minimal abstraction, max maintainability',
    descPt: 'Abstração mínima, manutenibilidade máxima'
  },
  {
    title: 'Total Ownership',
    titlePt: 'Responsabilidade Total',
    desc: 'From system spec to prod telemetry',
    descPt: 'Da especificação do sistema à telemetria em produção'
  },
  {
    title: 'Continuous Flow',
    titlePt: 'Fluxo Contínuo',
    desc: 'Unblocking teams & automated releases',
    descPt: 'Desbloqueio de equipas & releases automatizadas'
  }
];

export const FLUTTER_MZ_METRICS: FlutterMzMetrics = {
  title: 'Lead Mentor @ Flutter MZ',
  titlePt: 'Mentor Principal @ Flutter MZ',
  status: 'Active',
  statusPt: 'Ativo',
  summary: 'Coaching 100+ African software engineers on Clean Architecture, deterministic state patterns, and automated release engineering.',
  summaryPt: 'Formando mais de 100 engenheiros de software africanos em Clean Architecture, padrões determinísticos de estado e engenharia automatizada de releases.',
  cohorts: '12+ Cohorts',
  cohortsPt: '12+ Turmas',
  automation: 'Fastlane CI/CD',
  automationPt: 'Fastlane CI/CD'
};

// ============================================================================
// WEB PRODUCTION PROJECTS (Strictly anonymous: never names the project, describes what it does)
// ============================================================================
export const WEB_PRODUCTION_PROJECTS: WebProductionProject[] = [
  {
    id: 'enterprise-cloud-network',
    whatItDoes: 'Enterprise IT, Cloud Infrastructure & Industrial Network Solutions Platform',
    whatItDoesPt: 'Plataforma Corporativa de TI, Infraestrutura Cloud e Redes Industriais',
    domain: 'Enterprise Cloud & IT Infrastructure',
    domainPt: 'Cloud Empresarial & Infraestrutura de TI',
    role: 'Full-Stack Systems & Web Architect',
    rolePt: 'Arquiteto de Sistemas Full-Stack & Web',
    summary: 'High-availability corporate platform engineering mission-critical network topology, cloud solutions, industrial process optimization, electronic security frameworks, and custom software systems designed specifically for emerging African markets.',
    summaryPt: 'Plataforma corporativa de alta disponibilidade desenvolvida para topologias de rede de missão crítica, soluções cloud, automação de processos industriais e segurança eletrónica projetada para mercados emergentes em África.',
    keyCapabilities: [
      'High-availability cloud infrastructure and network topology architecture',
      'Industrial process optimization and custom automation pipelines',
      'Integrated electronic security and digital facility access frameworks',
      'Engineered for reliability across volatile African connectivity environments'
    ],
    keyCapabilitiesPt: [
      'Arquitetura de infraestrutura cloud e topologia de rede de alta disponibilidade',
      'Otimização de processos industriais e pipelines de automação sob medida',
      'Sistemas integrados de segurança eletrónica e controlo de acesso digital',
      'Projetado para máxima resiliência em ambientes africanos de conectividade volátil'
    ],
    techStack: ['Next.js', 'React', 'Cloud Infrastructure', 'Network Topology', 'Process Automation'],
    liveUrl: 'https://wolftech.industries/'
  },
  {
    id: 'automotive-dealership-ev',
    whatItDoes: 'Nationwide Automotive Dealership, Commercial Fleet & EV Transition Ecosystem',
    whatItDoesPt: 'Ecossistema Digital de Concessionária Automóvel, Frotas e Transição para Veículos Elétricos',
    domain: 'Automotive & Sustainable Clean Mobility',
    domainPt: 'Setor Automóvel & Mobilidade Sustentável',
    role: 'Frontend Architect & Digital Experience Lead',
    rolePt: 'Arquiteto Frontend & Líder de Experiência Digital',
    summary: 'Multi-brand digital automotive platform for Mozambique\'s official distributor of global brands (Nissan, Renault Trucks, Continental, General Tire). Integrates dynamic used-vehicle inventory, province-wide branch & workshop routing, after-sales service booking, and the pioneer "Move to Green" electric vehicle fleet initiative.',
    summaryPt: 'Plataforma digital automóvel multimarca para o distribuidor oficial de marcas globais em Moçambique. Integra catálogo dinâmico de viaturas usadas, localização interativa de oficinas em todas as províncias, agendamento pós-venda e o portal pioneiro "Move to Green" para adoção de frotas elétricas comerciais.',
    keyCapabilities: [
      'Bilingual (PT/EN) multi-brand automotive catalog and vehicle comparison engine',
      'Interactive nationwide branch locator connecting physical dealerships and workshops',
      'Real-time used-vehicle showcase with dynamic specifications and inquiry pipelines',
      'Integrated "Move to Green" clean mobility portal driving commercial EV adoption'
    ],
    keyCapabilitiesPt: [
      'Catálogo automóvel multimarca bilingue (PT/EN) com motor de comparação técnica',
      'Localizador interativo de delegações e oficinas em todo o território nacional',
      'Montra em tempo real de viaturas usadas com especificações detalhadas',
      'Portal integrado de mobilidade limpa "Move to Green" para frotas elétricas comerciais'
    ],
    techStack: ['Next.js 15', 'React', 'TailwindCSS', 'Mantine UI', 'Geolocation Routing', 'Bilingual i18n'],
    liveUrl: 'https://motorcare.co.mz/en/home'
  },
  {
    id: 'security-cctv-ecommerce',
    whatItDoes: 'Enterprise Electronic Security, CCTV & Smart Surveillance E-Commerce Platform',
    whatItDoesPt: 'Plataforma E-Commerce de Segurança Eletrónica, CCTV e Videovigilância Inteligente',
    domain: 'E-Commerce & Smart Physical Security',
    domainPt: 'Comércio Eletrónico & Segurança Física Inteligente',
    role: 'Full-Stack E-Commerce Architect',
    rolePt: 'Arquiteto Full-Stack de E-Commerce',
    summary: 'End-to-end digital commerce and product dispatch platform for enterprise security solutions in Mozambique. Delivers an extensive CCTV and smart surveillance catalog, instant full-text search, persistent shopping cart, customer authentication portal, and integrated physical installation service requests.',
    summaryPt: 'Plataforma de comércio digital e despacho operacional de soluções empresariais de segurança em Moçambique. Apresenta catálogo completo de CCTV e videovigilância inteligente, pesquisa rápida de produtos, carrinho persistente, autenticação de clientes e agendamento de instalações físicas especializadas.',
    keyCapabilities: [
      'Enterprise CCTV & smart surveillance product catalog with categorized specs',
      'Instant full-text product search, category filtering, and promotional showcases',
      'High-performance shopping cart state with responsive mobile-first checkout',
      'Seamless B2B & B2C quote dispatch connecting directly to physical branch specialists'
    ],
    keyCapabilitiesPt: [
      'Catálogo corporativo de CCTV e videovigilância com especificações categorizadas',
      'Pesquisa instantânea de produtos em texto integral, filtros e destaques promocionais',
      'Estado do carrinho de compras de alta performance com checkout otimizado para smartphone',
      'Encaminhamento direto de orçamentos B2B e B2C para especialistas nas lojas físicas'
    ],
    techStack: ['Next.js App Router', 'React', 'TailwindCSS', 'E-Commerce Cart State', 'Zod Validation', 'Responsive UI'],
    liveUrl: 'https://kiva.co.mz/'
  }
];

// ============================================================================
// PUBLIC MOBILE APPS (Open to public on Google Play Store - Named with live links)
// ============================================================================
export const PUBLIC_MOBILE_APPS: PublicMobileApp[] = [
  {
    id: 'atec-passenger',
    name: 'ATEC',
    packageId: 'mz.co.atec',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=mz.co.atec&hl=en',
    role: 'Lead Mobile Architect • Flutter & Realtime Geolocation',
    rolePt: 'Arquiteto Mobile Principal • Flutter & Geolocalização em Tempo Real',
    category: 'On-Demand Urban Mobility & Ride-Hailing',
    categoryPt: 'Mobilidade Urbana a Pedido & Transporte de Passageiros',
    summary: 'Real-time passenger mobility application in Mozambique. Enables riders to request trips on-demand, selecting between conventional taxis, txopelas (tuk-tuks), and motorcycles with live GPS tracking, dynamic fare calculations, and instant driver dispatch.',
    summaryPt: 'Aplicação de mobilidade de passageiros em tempo real em Moçambique. Permite aos utilizadores solicitar viagens sob demanda, escolhendo entre táxis convencionais, txopelas (tuk-tuks) e motos com rastreamento GPS em direto, estimativas tarifárias e despacho instantâneo.',
    keyCapabilities: [
      'Multi-tier vehicle selection: Passenger Taxis, Txopelas (Tuk-Tuks), and Motorcycles',
      'Real-time GPS tracking and live driver approach telemetry on interactive maps',
      'Dynamic trip fare estimation based on distance, traffic conditions, and vehicle type',
      'Direct WhatsApp emergency dispatch and verified passenger safety protocols'
    ],
    keyCapabilitiesPt: [
      'Seleção de múltiplos veículos: Táxis de Passageiros, Txopelas (Tuk-Tuks) e Motos',
      'Rastreamento GPS em tempo real com aproximação do motorista em mapa interativo',
      'Estimativa dinâmica de tarifas com base em distância, tráfego e categoria do veículo',
      'Acionamento de emergência via WhatsApp e protocolos de segurança verificados'
    ],
    techStack: ['Flutter', 'Dart', 'Google Maps SDK', 'WebSocket Realtime', 'Geohashing', 'State Management']
  },
  {
    id: 'atec-driver',
    name: 'ATEC Motorista',
    packageId: 'mz.co.atec_driver',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=mz.co.atec_driver&hl=en',
    role: 'Lead Mobile Architect • Flutter & Driver State Machines',
    rolePt: 'Arquiteto Mobile Principal • Flutter & Máquinas de Estado',
    category: 'Driver Partner & Fleet Operations System',
    categoryPt: 'Sistema de Operações de Frotas & Gestão de Motoristas',
    summary: 'Dedicated mobile companion app for driver partners operating on the ATEC transport network. Handles sub-second trip dispatch alerts, turn-by-turn route navigation, passenger pickup verification, and comprehensive daily and weekly financial earnings ledgers.',
    summaryPt: 'Aplicação móvel companheira para os motoristas parceiros na rede de transportes ATEC. Gere alertas de novas viagens em menos de um segundo, navegação passo-a-passo no trânsito urbano, confirmação de embarque e livro financeiro diário e semanal.',
    keyCapabilities: [
      'Sub-second push notifications with audible dispatch chimes for new trip requests',
      'Turn-by-turn route navigation optimized for local urban road topology',
      'Driver shift control with instant online/offline toggle and battery-efficient location pings',
      'Built-in earnings ledger tracking completed trips, net revenues, and payout statuses'
    ],
    keyCapabilitiesPt: [
      'Notificações push em menos de 1 segundo com aviso sonoro para novas viagens',
      'Navegação rota-a-rota otimizada para a topologia viária urbana local',
      'Controlo de turnos com alternador online/offline e economia inteligente de bateria',
      'Livro financeiro integrado com viagens concluídas, receitas líquidas e estado de repasses'
    ],
    techStack: ['Flutter', 'Dart', 'Background Geolocation', 'State Machine', 'Local Storage', 'Push Notifications']
  },
  {
    id: 'ivm-client',
    name: 'IVM',
    packageId: 'com.cliente.ivm',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cliente.ivm&hl=en',
    role: 'Mobile Engineer • Flutter & Multimedia Sync',
    rolePt: 'Engenheiro Mobile • Flutter & Sincronização Multimédia',
    category: 'Health, Wellness & Workout Tracking',
    categoryPt: 'Saúde, Bem-Estar & Acompanhamento de Treinos',
    summary: 'Comprehensive personal fitness companion app. Offers an extensive library of on-demand workout classes across cardio, strength, yoga, and Pilates, complete with exercise execution guides, workout logging, body metrics tracking, and direct coach communication.',
    summaryPt: 'Aplicação completa de bem-estar e preparação física pessoal. Oferece biblioteca de aulas de treino sob demanda em cardio, força, ioga e pilates, com guias visuais de execução, registo de repetições, evolução corporal e chat direto com treinadores.',
    keyCapabilities: [
      'Categorized video workout routines (Cardio, Strength, Flexibility, Pilates, Yoga)',
      'Detailed workout tracker logging sets, repetitions, weights, and rest intervals',
      'Body measurement and milestone progression charts with visual telemetry',
      'In-app coach messaging for personalized training adjustments and guidance'
    ],
    keyCapabilitiesPt: [
      'Rotinas de treino em vídeo categorizadas (Cardio, Força, Flexibilidade, Pilates e Ioga)',
      'Registo detalhado de treinos com séries, repetições, cargas e intervalos de descanso',
      'Gráficos de evolução corporal e marcos atingidos com telemetria visual clara',
      'Comunicação direta com o treinador para ajustes e orientação personalizada'
    ],
    techStack: ['Flutter', 'Dart', 'Video Streaming', 'Offline Media Caching', 'SQLite Storage', 'REST APIs']
  },
  {
    id: 'ivm-trainer',
    name: 'IVM Trainer',
    packageId: 'com.trainer.ivm',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.trainer.ivm&hl=en',
    role: 'Mobile Engineer • Flutter & Coach Tools',
    rolePt: 'Engenheiro Mobile • Flutter & Ferramentas de Instrutores',
    category: 'Coach Management & Athlete Progression',
    categoryPt: 'Gestão de Atletas & Ferramentas para Treinadores',
    summary: 'Professional coaching portal engineered for certified personal trainers and fitness instructors. Enables coaches to construct tailored exercise regimens, schedule training sessions, monitor client compliance, and analyze athlete athletic performance.',
    summaryPt: 'Portal móvel de gestão para treinadores e instrutores de fitness certificados. Permite estruturar planos de treino sob medida, agendar sessões, acompanhar a assiduidade dos alunos e avaliar a evolução técnica dos atletas.',
    keyCapabilities: [
      'Client roster dashboard with individual workout plan construction and customization',
      'Integrated training calendar for scheduling live sessions and rest periods',
      'Real-time compliance monitoring alerting coaches to completed workouts and milestones',
      'Centralized client communication and performance feedback workflows'
    ],
    keyCapabilitiesPt: [
      'Painel de alunos com criação e personalização de planos de treino individuais',
      'Agenda integrada de sessões de treino, períodos de descanso e avaliações',
      'Acompanhamento em tempo real de treinos concluídos e metas físicas atingidas',
      'Canal centralizado de comunicação com alunos e feedback de rendimento'
    ],
    techStack: ['Flutter', 'Dart', 'Calendar Engine', 'State Management', 'REST APIs', 'Secure Auth']
  },
  {
    id: 'txeka-la',
    name: 'Txeka Lá',
    packageId: 'mz.co.txecapp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=mz.co.txecapp&hl=en',
    role: 'Lead Mobile Architect • Mobile & Citizen Tech',
    rolePt: 'Arquiteto Mobile Principal • Tecnologia Cívica & Mobile',
    category: 'Civic Transparency & Human Rights Observation',
    categoryPt: 'Transparência Cívica & Observação de Direitos Humanos',
    summary: 'Public interest civic engagement and reporting platform in Mozambique. Empowers citizens to act as community observers, documenting human rights observations and local governance events to foster democratic accountability and the rule of law.',
    summaryPt: 'Plataforma de interesse público para participação e monitoria cívica em Moçambique. Capacita cidadãos e observadores comunitários a registar ocorrências de direitos humanos e eventos de governação local em prol da justiça e transparência democrática.',
    keyCapabilities: [
      'Secure, anonymous incident reporting with photo, video, and geolocation metadata',
      'Community verification and editorial validation workflow integration',
      'Civic observation newsfeed alerting citizens to local developments and rights updates',
      'Offline incident drafting enabling report creation in remote areas without immediate data connection'
    ],
    keyCapabilitiesPt: [
      'Registo seguro e anónimo de incidentes com foto, vídeo e metadados de geolocalização',
      'Integração com fluxo editorial e validação de denúncias pela comunidade',
      'Feed de notícias cívicas com alertas locais e atualizações de direitos fundamentais',
      'Criação de rascunhos em modo offline para zonas remotas sem ligação à Internet'
    ],
    techStack: ['Flutter', 'Dart', 'Media Compression', 'Encrypted Offline Drafts', 'Geolocation', 'REST APIs']
  }
];

// ============================================================================
// SERVICE OFFERINGS & PLANS (Web & Mobile Apps - Strictly No Pricing)
// ============================================================================
export const SERVICE_PLANS: ServicePlan[] = [
  // --- Modern & Responsive Web Development Plans ---
  {
    id: 'web-landing',
    name: 'Landing Page',
    namePt: 'Landing Page',
    category: 'web',
    tagline: 'High-converting single-page digital presence',
    taglinePt: 'Conversão imediata e presença digital focada',
    idealFor: 'Targeted campaigns, product launches, and high-velocity traffic conversion',
    idealForPt: 'Campanhas específicas, lançamentos de produtos e conversão de tráfego',
    timeline: '1–2 Weeks Delivery',
    timelinePt: '1–2 Semanas de Entrega',
    iconType: 'zap',
    techStack: ['Next.js 15', 'TailwindCSS', 'TypeScript', 'Zod', 'SEO Meta'],
    slaGuarantee: '100% Core Web Vitals • Mobile First',
    slaGuaranteePt: '100% Core Web Vitals • Mobile First',
    features: [
      'Single-page persuasive narrative engineered with conversion-focused sections',
      '100% responsive fluid layout optimized across smartphones, tablets, and desktops',
      'Interactive lead capture form with instant schema field validation',
      'Direct WhatsApp 1-tap integration for immediate customer inquiry and sales',
      'Interactive Google Maps location integration',
      'Sub-second load times and production-ready Google SEO meta architecture'
    ],
    featuresPt: [
      'Página única com narrativa persuasiva e secções orientadas à conversão',
      'Design totalmente responsivo (otimizado para smartphones, tablets e desktop)',
      'Formulário de contacto interativo com validação de campos',
      'Integração direta com WhatsApp para atendimento imediato',
      'Localização geográfica interativa via Google Maps',
      'Otimização de velocidade de carregamento e boas práticas de SEO'
    ],
    deliverables: [
      'Production-ready clean TypeScript source code with 100% IP ownership',
      'Automated cloud edge deployment (Vercel / Cloudflare)',
      'Dynamic OpenGraph and Twitter card previews for social sharing'
    ],
    deliverablesPt: [
      'Código-fonte completo e limpo com 100% de propriedade intelectual',
      'Publicação e configuração no servidor de produção (Vercel / Cloudflare)',
      'Configuração de tags OpenGraph para partilha elegante nas redes sociais'
    ]
  },
  {
    id: 'web-institucional',
    name: 'Institutional Website',
    namePt: 'Website Institucional',
    category: 'web',
    tagline: 'Brand authority and executive corporate presentation',
    taglinePt: 'Autoridade e apresentação formal da marca',
    idealFor: 'Enterprises, law firms, clinics, and organizations requiring high digital credibility',
    idealForPt: 'Empresas, escritórios e instituições que necessitam de credibilidade digital',
    timeline: '2–3 Weeks Delivery',
    timelinePt: '2–3 Semanas de Entrega',
    highlight: 'Most Popular',
    highlightPt: 'Mais Procurado',
    iconType: 'globe',
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Email API', 'Google SEO'],
    slaGuarantee: 'SSL A+ Security • 99.98% Monitored Uptime',
    slaGuaranteePt: 'Segurança SSL A+ • 99.98% Uptime Monitorado',
    features: [
      'Up to 5 structured pages (Home, About, Services, Portfolio/Gallery, and Contact)',
      'Tailored 100% responsive design aligned with your brand typography and design system',
      'Secure inquiry form with dual instant dispatch to email and WhatsApp',
      'Interactive location map, team showcase, and social channel hubs',
      'Semantic SEO architecture engineered for Google Search indexing',
      'Enterprise HTTPS SSL certificate setup and security response headers'
    ],
    featuresPt: [
      'Até 5 páginas estruturadas (Início, Sobre, Serviços, Galeria/Portfólio e Contactos)',
      'Design profissional 100% responsivo adaptado à identidade visual',
      'Formulário de contacto seguro com notificações por email e WhatsApp',
      'Mapa de localização interativo e ligações aos canais sociais',
      'Estrutura semântica preparada para indexação nos motores de busca (Google SEO)',
      'Integração de certificado de segurança HTTPS e cabeçalhos de segurança'
    ],
    deliverables: [
      'Multi-page navigation architecture with clean, maintainable, typed codebase',
      'Executive operations manual for managing leads and customer inquiries',
      'Google Search Console indexing setup and automated XML sitemap'
    ],
    deliverablesPt: [
      'Arquitetura de navegação multi-página com código limpo e documentado',
      'Manual breve de administração de contactos e leads',
      'Indexação inicial no Google Search Console e sitemap XML automatizado'
    ]
  },
  {
    id: 'web-empresarial',
    name: 'Corporate CMS Portal',
    namePt: 'Website Empresarial',
    category: 'web',
    tagline: 'Autonomous content publishing and strategic market positioning',
    taglinePt: 'Gestão autónoma de conteúdos e posicionamento estratégico',
    idealFor: 'Growing organizations and SMEs regularly publishing press releases, articles, and updates',
    idealForPt: 'PMEs e empresas em expansão que produzem novidades, artigos e comunicados',
    timeline: '3–5 Weeks Delivery',
    timelinePt: '3–5 Semanas de Entrega',
    iconType: 'building',
    techStack: ['Next.js 15', 'Headless CMS', 'PostgreSQL / Supabase', 'Google Analytics', 'Edge Cache'],
    slaGuarantee: 'Autonomous CMS • Zero Developer Lock-in',
    slaGuaranteePt: 'Autonomia Total CMS • 0 Dependência de Dev',
    features: [
      'Up to 10 comprehensive pages with bespoke layout and modern typography',
      'Integrated corporate blog and insights hub for content marketing',
      'Intuitive headless CMS dashboard for autonomous publishing of text, media, and articles',
      'Lead generation modules, downloadable resources, and newsletter subscription',
      'Ultra-fast page loads powered by Next.js edge caching and asset optimization',
      'Integration with Google Analytics 4, Search Console, and performance monitoring'
    ],
    featuresPt: [
      'Até 10 páginas completas com design personalizado e tipografia moderna',
      'Blog corporativo integrado para marketing de conteúdo e artigos',
      'Painel dinâmico intuitivo para gestão autónoma de textos, imagens e artigos',
      'Módulos de captação de leads e subscrição de newsletter',
      'Carregamento ultra-rápido com renderização moderna e otimização de imagens',
      'Integração com ferramentas de análise e tráfego (Google Analytics & Search Console)'
    ],
    deliverables: [
      'Operational Headless CMS with role-based user management',
      'Recorded video operational onboarding walkthrough for marketing staff',
      'Advanced Core Web Vitals optimization and audit report'
    ],
    deliverablesPt: [
      'Painel CMS configurado e operacional com permissões de utilizadores',
      'Formação operacional em vídeo para publicação de artigos',
      'Otimização avançada de performance e Core Web Vitals'
    ]
  },
  {
    id: 'web-corporativo-premium',
    name: 'Bespoke Enterprise Web Architecture',
    namePt: 'Website Corporativo Premium',
    category: 'web',
    tagline: 'World-class custom design, fluid micro-interactions, and high performance',
    taglinePt: 'Design exclusivo de classe internacional e alta performance',
    idealFor: 'Multinationals, fintechs, and high-growth brands demanding zero design compromises',
    idealForPt: 'Grandes corporações, multinacionais e marcas que exigem excelência visual sem concessões',
    timeline: '4–6 Weeks Delivery',
    timelinePt: '4–6 Semanas de Entrega',
    highlight: 'Architect Choice',
    highlightPt: 'Escolha do Arquiteto',
    iconType: 'crown',
    techStack: ['Next.js 15', 'TailwindCSS', 'Framer Motion', 'REST/GraphQL APIs', 'CI/CD Pipelines'],
    slaGuarantee: 'Zero-Lockin • Critical Response SLA < 2h',
    slaGuaranteePt: 'Zero-Lockin • SLA de Resposta Crítica < 2h',
    features: [
      '100% bespoke design system crafted from scratch with zero generic templates',
      'Native bilingual/multilingual localization support (PT/EN with instant switching)',
      '60 FPS fluid micro-animations and high-fidelity interaction design',
      'End-to-end integration with enterprise REST/GraphQL APIs, CRMs, and backend databases',
      'Advanced web security headers, CSP sanitization, and vulnerability shielding',
      'WCAG 2.1 AA accessibility compliance and universal cross-browser stability'
    ],
    featuresPt: [
      'Design 100% exclusivo desenhado à medida, sem recurso a templates genéricos',
      'Suporte a múltiplos idiomas (multilíngue PT/EN e outros)',
      'Micro-animações fluidas e transições interativas de alta fidelidade',
      'Integração completa com APIs empresariais, CRMs e plataformas externas',
      'Arquitetura de segurança avançada com proteção de cabeçalhos e sanitização',
      'Compliance de acessibilidade (WCAG) e compatibilidade universal em navegadores'
    ],
    deliverables: [
      'Documented custom Design System with reusable UI tokens and Figma handoff',
      'Automated GitHub Actions CI/CD pipeline with end-to-end test verification',
      '60-day post-launch technical warranty with priority incident response'
    ],
    deliverablesPt: [
      'Design System personalizado e documentado com tokens reutilizáveis',
      'Pipelines de deploy contínuo (CI/CD) com testes automatizados',
      'Garantia técnica pós-lançamento de 60 dias com suporte prioritário'
    ]
  },
  {
    id: 'web-ecommerce',
    name: 'E-Commerce Platform',
    namePt: 'Loja Online (E-commerce)',
    category: 'web',
    tagline: 'Digital commerce powered by native African mobile payment rails',
    taglinePt: 'Vendas digitais com métodos de pagamento locais de Moçambique',
    idealFor: 'B2C and B2B digital merchants requiring automated mobile money checkout and stock handling',
    idealForPt: 'Comércio eletrónico B2C e B2B que necessita de pagamentos por telemóvel e gestão de encomendas',
    timeline: '4–7 Weeks Delivery',
    timelinePt: '4–7 Semanas de Entrega',
    iconType: 'cart',
    techStack: ['Next.js 15', 'M-Pesa API', 'e-Mola API', 'PostgreSQL', 'Redis', 'Stock Engine'],
    slaGuarantee: 'Zero Duplicate Charges • Idempotent Webhooks',
    slaGuaranteePt: 'Zero Duplicate Charges • Webhooks Idempotentes',
    features: [
      'Full product catalog with dynamic categories, faceted filters, and instant search',
      'Frictionless shopping cart and streamlined single-page checkout flow',
      'Native webhook integration for African mobile money (M-Pesa, e-Mola) and card processing',
      'Administrative dashboard for inventory control, order fulfillment, and price management',
      'Automated order confirmation alerts dispatched via email and WhatsApp',
      'Dynamic delivery zone calculation and shipment tracking status lifecycle'
    ],
    featuresPt: [
      'Catálogo completo de produtos com categorias, filtros e pesquisa instantânea',
      'Sistema dinâmico de carrinho de compras e checkout sem fricção',
      'Integração nativa com métodos de pagamento móveis locais (M-Pesa, eMola e cartões)',
      'Painel administrativo completo para gestão de stock, preços e pedidos',
      'Notificações automáticas de confirmação de encomenda via email e WhatsApp',
      'Cálculo de custos de entrega e gestão de estados de expedição'
    ],
    deliverables: [
      'Turnkey e-commerce platform ready for live customer transactions',
      'Sandbox and live production mobile money testing with carrier SIM rails',
      'Sales analytics dashboard and reconciliation ledger reports'
    ],
    deliverablesPt: [
      'Plataforma de comércio eletrónico pronta a faturar com catálogo alimentado',
      'Testes de transação em ambiente de homologação e produção com carrier SIMs',
      'Painel de métricas financeiras e relatórios de vendas e reconciliação'
    ]
  },

  // --- Equivalent Mobile App Development Plans (No Price) ---
  {
    id: 'app-mvp',
    name: 'Single-Purpose MVP App',
    namePt: 'App MVP / Single-Purpose',
    category: 'app',
    tagline: 'Fast hypothesis validation and focused product utilities',
    taglinePt: 'Validação rápida de hipóteses e utilitários focados',
    idealFor: 'Startups, founders, and teams needing a working production client in users hands quickly',
    idealForPt: 'Startups, fundadores e negócios que precisam de colocar uma ideia funcional na mão do utilizador',
    timeline: '2–4 Weeks Delivery',
    timelinePt: '2–4 Semanas de Entrega',
    iconType: 'zap',
    techStack: ['Flutter', 'Dart', 'BLoC State', 'Firebase Auth', 'Play Store'],
    slaGuarantee: '99.9% Crash-Free Users • Google Play Compliant',
    slaGuaranteePt: '99.9% Crash-Free Users • Google Play Compliant',
    features: [
      'Mobile app focused on one core user journey with intuitive UI flows',
      'Clean, modern, and responsive layout across all screen resolutions',
      'Targeted push notifications for user retention and re-engagement',
      'Modular architecture structured for easy future feature expansion',
      'Assisted release on Google Play Store',
      'Optimized for low battery consumption and minimal mobile data usage'
    ],
    featuresPt: [
      'Aplicação mobile focada num objetivo central com fluxos de utilização intuitivos',
      'Interface limpa, moderna e responsiva para ecrãs de qualquer resolução',
      'Integração com notificações push para reativação de utilizadores',
      'Arquitetura modular preparada para escalabilidade futura',
      'Publicação assistida na Google Play Store',
      'Consumo eficiente de bateria e tráfego de dados móveis'
    ],
    deliverables: [
      'Production-ready APK / AAB cryptographic release bundle',
      'Clean Architecture source code in Flutter/Dart with zero technical debt',
      'Firebase Console and push notification infrastructure setup'
    ],
    deliverablesPt: [
      'Ficheiro APK / AAB pronto para produção assinado criptograficamente',
      'Código-fonte completo estruturado segundo princípios de Clean Architecture',
      'Configuração do painel Firebase / Notificações Push'
    ]
  },
  {
    id: 'app-institucional',
    name: 'Institutional App & Catalog',
    namePt: 'App Institucional & Catálogo',
    category: 'app',
    tagline: 'Permanent mobile presence right in your customers pockets',
    taglinePt: 'Presença móvel permanente no smartphone dos seus clientes',
    idealFor: 'Brands, private clinics, consultancies, and service businesses with structured service offerings',
    idealForPt: 'Marcas, clínicas, consultorias e empresas de serviços com catálogo frequente',
    timeline: '3–5 Weeks Delivery',
    timelinePt: '3–5 Semanas de Entrega',
    iconType: 'smartphone',
    techStack: ['Flutter', 'Hive Local DB', 'WhatsApp Deep Link', 'Push Notifications'],
    slaGuarantee: 'Offline Data Availability • 100% Fluid UI',
    slaGuaranteePt: 'Acesso Offline aos Dados • 100% Responsivo',
    features: [
      'Up to 5 structured screens (Home, About, Services/Catalog, Booking, and Contacts)',
      'Offline-first browsing of vital company data via local Hive cache',
      'Integrated appointment scheduling and service booking flows',
      'Direct 1-tap WhatsApp chat and phone dialing buttons',
      'Interactive geolocation with route calculation to company headquarters',
      'Visual layout strictly aligned with corporate brand guidelines'
    ],
    featuresPt: [
      'Até 5 ecrãs/módulos estruturados (Início, Sobre, Serviços/Catálogo, Agendamento e Contactos)',
      'Suporte a consulta offline de informações essenciais da empresa via Hive cache',
      'Módulo de marcação de reuniões ou agendamento de serviços',
      'Ligação direta com WhatsApp corporativo e discagem telefónica com 1 clique',
      'Geolocalização com cálculo de rota até à sede da empresa',
      'Design em harmonia rigorosa com o guia de identidade da marca'
    ],
    deliverables: [
      'Google Play Store release configuration and signed production artifacts',
      'Promotional store asset package (high-res icons and showcase screenshots)',
      'Real-time data synchronization mechanism'
    ],
    deliverablesPt: [
      'Lançamento da app na Google Play Store com ficheiro de configuração',
      'Material promocional (ícones de alta resolução e capturas de ecrã para as lojas)',
      'Mecanismo de atualização de dados em tempo real'
    ]
  },
  {
    id: 'app-empresarial',
    name: 'Operations & Field App',
    namePt: 'App Empresarial & Operações',
    category: 'app',
    tagline: 'Field process digitization and internal operational productivity',
    taglinePt: 'Digitalização de processos de campo e produtividade interna',
    idealFor: 'Field technicians, inspection squads, logistics dispatchers, and operational supervisors',
    idealForPt: 'Empresas com equipas externas, técnicos de campo, gestores de stock e supervisores',
    timeline: '4–6 Weeks Delivery',
    timelinePt: '4–6 Semanas de Entrega',
    highlight: 'Most Popular',
    highlightPt: 'Mais Procurado',
    iconType: 'database',
    techStack: ['Flutter', 'SQLite SQLCipher', 'CASL RBAC', 'WorkManager', 'Fastlane'],
    slaGuarantee: 'Zero Data Loss Offline • Secure Field Sync',
    slaGuaranteePt: 'Zero Data Loss Offline • Sincronização Segura',
    features: [
      'Role-based module access control (RBAC) with secure biometric session handling',
      'Air-gapped offline-first architecture with SQLite caching and auto-sync queues',
      'Field data capture: compressed image uploads, digital signatures, and GPS coordinates',
      'Operational dashboards and consolidated reporting analytics',
      'Encrypted transport channels with strict schema validation',
      'Data export and automated integration with central ERPs and internal backends'
    ],
    featuresPt: [
      'Múltiplos módulos de trabalho com autenticação e permissões por perfil (RBAC)',
      'Arquitetura offline-first com persistência local em SQLite e sincronização automática',
      'Captura de dados de campo: fotografias com compressão, assinaturas digitais e GPS',
      'Painel de consulta com dashboards operacionais e relatórios consolidados',
      'Comunicação segura via canais encriptados e validação estrita de esquemas',
      'Exportação de dados e integração com sistemas centrais da empresa'
    ],
    deliverables: [
      'Enterprise field client rigorously stress-tested under poor 2G/3G network conditions',
      'Data loss prevention and contingency transaction recovery mechanisms',
      'Comprehensive technical architecture and API documentation for IT teams'
    ],
    deliverablesPt: [
      'App de operações compilada e testada em condições de conectividade instável',
      'Mecanismos de recuperação e contingência contra perda de dados',
      'Documentação técnica detalhada para a equipa de TI da organização'
    ]
  },
  {
    id: 'app-corporativo-premium',
    name: 'Flagship Mobile Client (iOS & Android)',
    namePt: 'App Corporativo Premium (iOS & Android)',
    category: 'app',
    tagline: 'World-class native experience for Apple and Android ecosystems',
    taglinePt: 'Experiência nativa de classe mundial para ecossistemas Apple e Android',
    idealFor: 'Financial institutions, telecoms, insurers, and tier-1 consumer applications',
    idealForPt: 'Instituições financeiras, seguradoras, telecomunicações e grandes marcas de consumo',
    timeline: '6–8 Weeks Delivery',
    timelinePt: '6–8 Semanas de Entrega',
    highlight: 'Architect Choice',
    highlightPt: 'Escolha do Arquiteto',
    iconType: 'shield',
    techStack: ['Flutter iOS/Android', 'Hardware NFC / OCR', 'Native Biometrics', 'Fastlane CI/CD'],
    slaGuarantee: 'Banking-Grade Security • 60/120 FPS Fluid',
    slaGuaranteePt: 'Nível Bancário de Segurança • 60/120 FPS',
    features: [
      'High-performance cross-platform Flutter application compiled for iOS and Android',
      'Custom enterprise Design System with fluid 60/120 FPS micro-animations',
      'Instant bilingual runtime language switching (PT/EN)',
      'Deep hardware integration (Biometrics/FaceID, NFC chip read/write, camera OCR)',
      'Bank-grade security posture with code obfuscation and encrypted keychain storage',
      'Automated continuous delivery pipelines with zero-touch build & store signing'
    ],
    featuresPt: [
      'Solução cross-platform de alto desempenho desenvolvida em Flutter para iOS e Android',
      'Design System exclusivo com micro-animações fluidas a 60/120 FPS',
      'Suporte multilíngue com comutação instantânea de idioma',
      'Integração profunda com hardware do dispositivo (Biometria/FaceID, NFC, Câmara e Bluetooth)',
      'Segurança de nível bancário com ofuscação de código e armazenamento em chaveiro encriptado',
      'Pipelines de entrega contínua com compilação e assinatura automatizadas'
    ],
    deliverables: [
      'Full dual deployment to Apple App Store and Google Play Store',
      'Complete test coverage suite (unit, widget, and integration tests)',
      '60-day post-launch engineering SLA warranty with continuous monitoring'
    ],
    deliverablesPt: [
      'Publicação completa na Apple App Store e Google Play Store',
      'Conjunto completo de testes automatizados unitários e de integração',
      'Garantia técnica de 60 dias com monitorização contínua de estabilidade'
    ]
  },
  {
    id: 'app-ondemand',
    name: 'On-Demand & 2-Sided Marketplace',
    namePt: 'App On-Demand & Marketplace (Dois Lados)',
    category: 'app',
    tagline: 'Real-time mobility, rapid delivery, and service dispatch platforms',
    taglinePt: 'Plataformas de mobilidade, entregas e serviços em tempo real',
    idealFor: 'Transport fleets, couriers, taxi/txopela cooperatives, and on-demand labor platforms',
    idealForPt: 'Negócios de transporte, entregas rápidas, táxis/txopelas e prestadores de serviços sob demanda',
    timeline: '6–9 Weeks Delivery',
    timelinePt: '6–9 Semanas de Entrega',
    iconType: 'cart',
    techStack: ['Flutter', 'Google Maps SDK', 'WebSockets', 'M-Pesa / e-Mola', 'Node.js Backend'],
    slaGuarantee: 'Real-Time Dispatch • Telco Reconciliation',
    slaGuaranteePt: 'Despacho em Tempo Real • Reconciliação Telco',
    features: [
      'Dual-app ecosystem: Customer App + Partner/Driver Dispatch App',
      'Live real-time GPS tracking and route calculation with interactive maps',
      'Automated dispatch engine with dynamic pricing, surge rates, and commission splits',
      'Native mobile money integration (M-Pesa and e-Mola automated checkout)',
      'Web management operations dashboard for live fleet monitoring and dispute resolution',
      'Trip history, digital receipts, earnings ledgers, and mutual rating system'
    ],
    featuresPt: [
      'Arquitetura completa com duas aplicações integradas: App do Cliente + App do Parceiro/Motorista',
      'Rastreamento de geolocalização e rotas em tempo real com mapas interativos',
      'Motor de despacho instantâneo com cálculo dinâmico de tarifas e comissões',
      'Integração nativa com carteiras móveis moçambicanas (M-Pesa e eMola)',
      'Painel de controlo web em tempo real para supervisão e resolução de litígios',
      'Histórico detalhado de corridas, extrato de ganhos e sistema de avaliação recíproca'
    ],
    deliverables: [
      'Complete 3-tier ecosystem: Passenger App + Driver App + Real-Time Dispatch Backend',
      'Carrier mobile money gateway certification and live production keys',
      'Stress and load-tested server infrastructure handling real-time ride spikes'
    ],
    deliverablesPt: [
      'Ecossistema completo: App Passageiro + App Motorista + Backend de Despacho',
      'Homologação dos gateways de pagamento móvel',
      'Testes de carga e stress para suporte a picos de procura em tempo real'
    ]
  }
];
