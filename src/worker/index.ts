// https://www.terraform.io/docs/providers/boundary/r/worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description for the worker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/worker#description Worker#description}
  */
  readonly description?: string;
  /**
  * The name for the worker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/worker#name Worker#name}
  */
  readonly name?: string;
  /**
  * The scope for the worker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/worker#scope_id Worker#scope_id}
  */
  readonly scopeId: string;
  /**
  * The worker authentication token required to register the worker for the worker-led authentication flow. Leaving this blank will result in a controller generated token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/worker#worker_generated_auth_token Worker#worker_generated_auth_token}
  */
  readonly workerGeneratedAuthToken?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/boundary/r/worker boundary_worker}
*/
export class Worker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_worker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/boundary/r/worker boundary_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_worker',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._workerGeneratedAuthToken = config.workerGeneratedAuthToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // authorized_actions - computed: true, optional: false, required: false
  public get authorizedActions() {
    return this.getListAttribute('authorized_actions');
  }

  // controller_generated_activation_token - computed: true, optional: false, required: false
  public get controllerGeneratedActivationToken() {
    return this.getStringAttribute('controller_generated_activation_token');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // release_version - computed: true, optional: false, required: false
  public get releaseVersion() {
    return this.getNumberAttribute('release_version');
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // worker_generated_auth_token - computed: false, optional: true, required: false
  private _workerGeneratedAuthToken?: string; 
  public get workerGeneratedAuthToken() {
    return this.getStringAttribute('worker_generated_auth_token');
  }
  public set workerGeneratedAuthToken(value: string) {
    this._workerGeneratedAuthToken = value;
  }
  public resetWorkerGeneratedAuthToken() {
    this._workerGeneratedAuthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerGeneratedAuthTokenInput() {
    return this._workerGeneratedAuthToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      worker_generated_auth_token: cdktf.stringToTerraform(this._workerGeneratedAuthToken),
    };
  }
}
