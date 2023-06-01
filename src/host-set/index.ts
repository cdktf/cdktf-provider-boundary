/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The host set description.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set#description HostSet#description}
  */
  readonly description?: string;
  /**
  * The catalog for the host set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set#host_catalog_id HostSet#host_catalog_id}
  */
  readonly hostCatalogId: string;
  /**
  * The list of host IDs contained in this set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set#host_ids HostSet#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * The host set name. Defaults to the resource name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set#name HostSet#name}
  */
  readonly name?: string;
  /**
  * The type of host set
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set#type HostSet#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set boundary_host_set}
*/
export class HostSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_host_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_set boundary_host_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostSetConfig
  */
  public constructor(scope: Construct, id: string, config: HostSetConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_host_set',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.7',
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
    this._hostCatalogId = config.hostCatalogId;
    this._hostIds = config.hostIds;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host_catalog_id - computed: false, optional: false, required: true
  private _hostCatalogId?: string; 
  public get hostCatalogId() {
    return this.getStringAttribute('host_catalog_id');
  }
  public set hostCatalogId(value: string) {
    this._hostCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCatalogIdInput() {
    return this._hostCatalogId;
  }

  // host_ids - computed: false, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host_catalog_id: cdktf.stringToTerraform(this._hostCatalogId),
      host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIds),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
