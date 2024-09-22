/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AliasTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The host id to pass to Boundary when performing an authorize session action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#authorize_session_host_id AliasTarget#authorize_session_host_id}
  */
  readonly authorizeSessionHostId?: string;
  /**
  * The alias description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#description AliasTarget#description}
  */
  readonly description?: string;
  /**
  * The destination of the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#destination_id AliasTarget#destination_id}
  */
  readonly destinationId?: string;
  /**
  * The alias name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#name AliasTarget#name}
  */
  readonly name?: string;
  /**
  * The scope ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#scope_id AliasTarget#scope_id}
  */
  readonly scopeId: string;
  /**
  * The type of alias; hardcoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#type AliasTarget#type}
  */
  readonly type?: string;
  /**
  * The value of the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#value AliasTarget#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target boundary_alias_target}
*/
export class AliasTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_alias_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AliasTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AliasTarget to import
  * @param importFromId The id of the existing AliasTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AliasTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_alias_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/alias_target boundary_alias_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AliasTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AliasTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_alias_target',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.15',
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
    this._authorizeSessionHostId = config.authorizeSessionHostId;
    this._description = config.description;
    this._destinationId = config.destinationId;
    this._name = config.name;
    this._scopeId = config.scopeId;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorize_session_host_id - computed: false, optional: true, required: false
  private _authorizeSessionHostId?: string; 
  public get authorizeSessionHostId() {
    return this.getStringAttribute('authorize_session_host_id');
  }
  public set authorizeSessionHostId(value: string) {
    this._authorizeSessionHostId = value;
  }
  public resetAuthorizeSessionHostId() {
    this._authorizeSessionHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeSessionHostIdInput() {
    return this._authorizeSessionHostId;
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

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorize_session_host_id: cdktf.stringToTerraform(this._authorizeSessionHostId),
      description: cdktf.stringToTerraform(this._description),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorize_session_host_id: {
        value: cdktf.stringToHclTerraform(this._authorizeSessionHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
