import { KubeObject } from '@kinvolk/headlamp-plugin/lib/K8s/cluster';

class VirtualMachineInstanceMigration extends KubeObject {
  get spec() {
    return this.jsonData?.spec;
  }

  get status() {
    return this.jsonData?.status;
  }

  getVMIName(): string {
    return this.spec?.vmiName || '-';
  }

  getSourceNode(): string {
    return this.status?.migrationState?.sourceNode || '-';
  }

  getTargetNode(): string {
    return this.status?.migrationState?.targetNode || '-';
  }

  getPhase(): string {
    return this.status?.phase || 'Unknown';
  }

  isCompleted(): boolean {
    const phase = this.getPhase();
    return phase === 'Succeeded' || phase === 'Failed';
  }

  isFailed(): boolean {
    return this.getPhase() === 'Failed';
  }

  getStartTime(): string {
    return this.status?.migrationState?.startTimestamp || this.metadata?.creationTimestamp || '-';
  }

  getCompletionTime(): string {
    return this.status?.migrationState?.endTimestamp || '-';
  }

  static kind = 'VirtualMachineInstanceMigration';
  static apiVersion = 'kubevirt.io/v1';
  static isNamespaced = true;
  static apiName = 'virtualmachineinstancemigrations';
  static apiPlural = 'virtualmachineinstancemigrations';
}

export default VirtualMachineInstanceMigration;
